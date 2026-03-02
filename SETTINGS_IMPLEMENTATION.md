# Settings Page Implementation

## Backend Implementation

### New API Endpoints

All endpoints are protected with JWT authentication middleware.

#### 1. GET /api/auth/profile

- **Description**: Get current user profile
- **Auth**: Required
- **Response**: User profile data (id, name, email, createdAt)

#### 2. PUT /api/auth/profile

- **Description**: Update user profile (name and email)
- **Auth**: Required
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string"
  }
  ```
- **Validation**:
  - Checks if email is already taken by another user
  - Both fields required
- **Response**: Updated user data

#### 3. PUT /api/auth/password

- **Description**: Update user password
- **Auth**: Required
- **Body**:
  ```json
  {
    "currentPassword": "string",
    "newPassword": "string"
  }
  ```
- **Validation**:
  - Verifies current password is correct
  - New password must be at least 6 characters
  - Both fields required
- **Response**: Success message

### Files Modified

1. **backend/controllers/authController.js**
   - Added `updateProfile()` - Updates user name and email
   - Added `updatePassword()` - Changes user password with validation
   - Added `getProfile()` - Retrieves user profile data

2. **backend/routes/authRoutes.js**
   - Added GET `/profile` route
   - Added PUT `/profile` route
   - Added PUT `/password` route
   - All new routes protected with `protect` middleware

## Frontend Implementation

### Settings Page Features

#### 1. Profile Tab

- **Functionality**:
  - Edit name and email
  - Form validation
  - API integration with backend
  - Success/error message display
  - Loading states during submission
  - Updates user context on success

#### 2. Preferences Tab

- **Functionality**:
  - Email Notifications toggle (working)
  - Auto-save Code toggle (working)
  - Dark Mode toggle (working)
  - State persisted to localStorage
  - Visual feedback with animated toggles

#### 3. Security Tab

- **Functionality**:
  - Change password form
  - Password validation (match check, min 6 chars)
  - API integration with backend
  - Success/error message display
  - Form clears on success
  - Two-factor authentication toggle (UI only)

#### 4. Billing Tab

- **Functionality**:
  - Display current plan (Free)
  - Upgrade button navigates to /pricing
  - Payment method section (UI only)

### State Management

```javascript
// Profile state
const [profileData, setProfileData] = useState({
  name: user?.name || "",
  email: user?.email || "",
});

// Preferences state (localStorage)
const [preferences, setPreferences] = useState({
  emailNotifications: true,
  autoSaveCode: false,
  darkMode: true,
});

// Security state
const [passwordData, setPasswordData] = useState({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});
```

### API Integration

All API calls use axios with JWT token from AuthContext:

```javascript
// Profile update
await axios.put(`${import.meta.env.VITE_API_URL}/auth/profile`, profileData, {
  headers: { Authorization: `Bearer ${user.token}` },
});

// Password update
await axios.put(
  `${import.meta.env.VITE_API_URL}/auth/password`,
  { currentPassword, newPassword },
  { headers: { Authorization: `Bearer ${user.token}` } },
);
```

## Testing the Implementation

### Profile Update

1. Navigate to Settings > Profile
2. Change name or email
3. Click "Save Changes"
4. Verify success message appears
5. Check that navbar shows updated name

### Password Change

1. Navigate to Settings > Security
2. Enter current password
3. Enter new password (min 6 chars)
4. Confirm new password
5. Click "Update Password"
6. Verify success message
7. Try logging in with new password

### Preferences

1. Navigate to Settings > Preferences
2. Toggle any switch
3. Refresh page
4. Verify toggle state persists (localStorage)

## Security Features

- All endpoints protected with JWT authentication
- Password hashing with bcrypt (10 salt rounds)
- Current password verification before update
- Email uniqueness validation
- Input validation on both frontend and backend
- Rate limiting on API endpoints (100 requests per 15 minutes)

## Future Enhancements

1. **Two-Factor Authentication**: Implement actual 2FA with TOTP
2. **Email Verification**: Send verification emails on email change
3. **Payment Integration**: Add Stripe/PayPal for billing
4. **Profile Picture**: Add avatar upload functionality
5. **Account Deletion**: Add delete account option
6. **Session Management**: Show active sessions and logout options
7. **Audit Log**: Track profile and security changes
