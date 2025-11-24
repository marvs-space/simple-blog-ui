import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaLock, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';

const SettingsPage = () => {
  // Notification states
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  // Privacy & Security states
  const [publicProfile, setPublicProfile] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  // Password states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log('Password change requested');
    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deletion requested');
    }
  };

  // Reusable Toggle Component
  const Toggle = ({ enabled, onChange, label, icon: Icon }) => (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-50 rounded-lg">
          <Icon className="text-gray-600 text-lg" />
        </div>
        <span className="font-medium text-gray-800">{label}</span>
      </div>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${enabled ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
        />
      </button>
    </div>
  );

  // Reusable Section Component
  const Section = ({ title, description, children }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-500">Manage your account preferences and settings</p>
        </div>

        <div className="space-y-6">
          {/* Notifications Section */}
          <Section
            title="Notifications"
            description="Choose what notifications you want to receive"
          >
            <Toggle
              enabled={emailNotifications}
              onChange={setEmailNotifications}
              label="Email Notifications"
              icon={FaBell}
            />
            <Toggle
              enabled={marketingEmails}
              onChange={setMarketingEmails}
              label="Marketing Emails"
              icon={FaEnvelope}
            />
          </Section>

          {/* Privacy & Security Section */}
          <Section
            title="Privacy & Security"
            description="Control your privacy and security settings"
          >
            <Toggle
              enabled={publicProfile}
              onChange={setPublicProfile}
              label="Public Profile"
              icon={FaLock}
            />
            <Toggle
              enabled={twoFactorAuth}
              onChange={setTwoFactorAuth}
              label="Two-Factor Authentication"
              icon={FaShieldAlt}
            />
          </Section>

          {/* Account Section - Password Change */}
          <Section
            title="Account"
            description="Update your password to keep your account secure"
          >
            <form onSubmit={handlePasswordChange} className="space-y-4 pt-2">
              {/* Current Password */}
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Update Password
              </button>
            </form>
          </Section>

          {/* Danger Zone Section */}
          <Section
            title="Danger Zone"
          >
            <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-start gap-3 mb-3">
                <FaExclamationTriangle className="text-red-600 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Delete Account</h3>
                  <p className="text-sm text-red-700">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className="w-full px-4 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all"
              >
                Delete My Account
              </button>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;