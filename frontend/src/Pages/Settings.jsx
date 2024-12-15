import React, { useContext, useState,useEffect } from 'react';
import { Edit, Save, X, User, Mail, Lock, Bell, Shield, CreditCard } from 'lucide-react';
import myContext from '../CreateContext';

const Settings = () => {
  const c=useContext(myContext)
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  const [userDetails, setUserDetails] = useState({});
  const [editedDetails, setEditedDetails] = useState({ ...userDetails });

  useEffect(() => {
    setUserDetails(c.decodeToken());
  }, [])
  
  const handleEdit = () => {
    setEditedDetails(userDetails);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDetails({ ...userDetails });
  };

  const handleSave =async () => {
    const res=await c.edit(editedDetails.username,editedDetails.email);
    if(res===true){
      setIsEditing(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderProfileSection = () => (
    <div className="card shadow-sm">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Personal Information</h4>
        {!isEditing ? (
          <button 
            className="btn btn-outline-primary" 
            onClick={handleEdit}
          >
            <Edit size={20} className="me-2" />
            Edit
          </button>
        ) : (
          <div>
            <button 
              className="btn btn-outline-success me-2" 
              onClick={handleSave}
            >
              <Save size={20} className="me-2" />
              Save
            </button>
            <button 
              className="btn btn-outline-secondary" 
              onClick={handleCancel}
            >
              <X size={20} className="me-2" />
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label d-flex align-items-center">
            <User size={20} className="me-2 text-muted" />
            {}
          </label>
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              name="username"
              value={editedDetails.username}
              onChange={handleInputChange}
            />
          ) : (
            <p className="form-control-plaintext">{userDetails.username}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label d-flex align-items-center">
            <Mail size={20} className="me-2 text-muted" />
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              className="form-control"
              name="email"
              value={editedDetails.email}
              onChange={handleInputChange}
            />
          ) : (
            <p className="form-control-plaintext">{userDetails.email}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label d-flex align-items-center">
            <Lock size={20} className="me-2 text-muted" />
            Password
          </label>
          {/* {isEditing ? (
            <input
              type="password"
              className="form-control"
              name="password"
              value={editedDetails.password}
              onChange={handleInputChange}
              placeholder="Enter new password"
            />
          ) : ( */}
            <p className="form-control-plaintext">{userDetails.password}</p>
          {/* )} */}
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4 className="mb-0">
          <Bell size={20} className="me-2 text-muted" />
          Notification Preferences
        </h4>
      </div>
      <div className="card-body">
        <div className="form-check mb-2">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="emailNotifs"
          />
          <label className="form-check-label" htmlFor="emailNotifs">
            Email Notifications
          </label>
        </div>
        <div className="form-check mb-2">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="pushNotifs"
          />
          <label className="form-check-label" htmlFor="pushNotifs">
            Push Notifications
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="weeklyDigest"
          />
          <label className="form-check-label" htmlFor="weeklyDigest">
            Weekly Digest
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4 className="mb-0">
          <Shield size={20} className="me-2 text-muted" />
          Security Settings
        </h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Two-Factor Authentication</label>
          <div>
            <button className="btn btn-outline-primary">
              Enable 2FA
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Active Sessions</label>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Desktop - Chrome
              <span className="badge bg-primary rounded-pill">Current</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Mobile - iOS
              <button className="btn btn-sm btn-outline-danger">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderBillingSection = () => (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4 className="mb-0">
          <CreditCard size={20} className="me-2 text-muted" />
          Billing Information
        </h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Current Plan</label>
          <p className="form-control-plaintext">Pro Monthly</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <div className="d-flex align-items-center">
            <span className="me-3">**** **** **** 4242</span>
            <button className="btn btn-sm btn-outline-primary">
              Update Card
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-danger">
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'profile':
        return renderProfileSection();
      case 'notifications':
        return renderNotificationsSection();
      case 'security':
        return renderSecuritySection();
      case 'billing':
        return renderBillingSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start ${activeSection === 'profile' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveSection('profile')}
                >
                  <User size={20} className="me-2" />
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start ${activeSection === 'notifications' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveSection('notifications')}
                >
                  <Bell size={20} className="me-2" />
                  Notifications
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start ${activeSection === 'security' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveSection('security')}
                >
                  <Shield size={20} className="me-2" />
                  Security
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link w-100 text-start ${activeSection === 'billing' ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => setActiveSection('billing')}
                >
                  <CreditCard size={20} className="me-2" />
                  Billing
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Settings;