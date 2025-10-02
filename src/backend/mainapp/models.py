from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# -------------------------
# Custom User Model
# -------------------------
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)



class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('farmer', 'Farmer'),
        ('buyer', 'Buyer'),
        ('investor', 'Investor'),
        ('admin', 'Admin'),
    ]
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    kyc_status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('verified', 'Verified'), ('rejected', 'Rejected')],
        default='pending'
    )
    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS should list the names of required fields (strings),
    # not the field objects. Include fields that should be prompted when
    # creating a superuser (email is the USERNAME_FIELD so exclude it).
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email


# -------------------------
# Farmer / Buyer / Investor Profiles
# -------------------------
class Farmer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="farmer_profile")
    farm_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    farm_size = models.CharField(max_length=100, blank=True, null=True)
    verification_docs = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.farm_name


class Buyer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="buyer_profile")
    business_name = models.CharField(max_length=255, blank=True, null=True)
    location = models.CharField(max_length=255)
    preferred_crops = models.JSONField(blank=True, null=True)

    def __str__(self):
        return self.business_name or self.user.username


class Investor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="investor_profile")
    wallet_address = models.CharField(max_length=100, blank=True, null=True)  # Hedera Account ID
    investment_limit = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    risk_profile = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f"Investor {self.user.username}"


# -------------------------
# Crop Listings
# -------------------------
class CropListing(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('funded', 'Funded'),
        ('sold', 'Sold'),
        ('delivered', 'Delivered'),
        ('closed', 'Closed'),
    ]

    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE, related_name="listings")
    crop_type = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    harvest_date = models.DateField()
    price_per_unit = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.crop_type} - {self.farmer.farm_name}"


# -------------------------
# Orders (Buyers)
# -------------------------
class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, related_name="orders")
    listing = models.ForeignKey(CropListing, on_delete=models.CASCADE, related_name="orders")
    quantity = models.PositiveIntegerField()
    total_price = models.DecimalField(max_digits=12, decimal_places=2)
    escrow_tx_id = models.CharField(max_length=255, blank=True, null=True)  # Hedera Tx ID
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} - {self.buyer.user.username}"


# -------------------------
# Investments (Investors)
# -------------------------
class Investment(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('matured', 'Matured'),
        ('paid_out', 'Paid Out'),
    ]

    investor = models.ForeignKey(Investor, on_delete=models.CASCADE, related_name="investments")
    listing = models.ForeignKey(CropListing, on_delete=models.CASCADE, related_name="investments")
    amount_invested = models.DecimalField(max_digits=12, decimal_places=2)
    expected_roi = models.DecimalField(max_digits=5, decimal_places=2)  # percentage
    crop_tokens = models.PositiveIntegerField(default=0)
    escrow_tx_id = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Investment {self.id} - {self.investor.user.username}"


# -------------------------
# Payments & Payouts
# -------------------------
class Payment(models.Model):
    TYPE_CHOICES = [
        ('escrow_in', 'Escrow In'),
        ('escrow_out', 'Escrow Out'),
        ('payout', 'Payout'),
        ('refund', 'Refund'),
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('failed', 'Failed'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="payments")
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=10, default="NGN")
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    hedera_tx_id = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.type} - {self.amount} {self.currency}"


# -------------------------
# Hedera Transactions
# -------------------------
class HederaTransaction(models.Model):
    TX_TYPE_CHOICES = [
        ('escrow', 'Escrow'),
        ('payout', 'Payout'),
        ('token_mint', 'Token Mint'),
        ('token_transfer', 'Token Transfer'),
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('success', 'Success'),
        ('failed', 'Failed'),
    ]

    tx_id = models.CharField(max_length=255, unique=True)
    tx_type = models.CharField(max_length=50, choices=TX_TYPE_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    raw_response = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"HederaTx {self.tx_id} - {self.tx_type}"
