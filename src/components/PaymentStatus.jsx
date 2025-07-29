import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const txnid = searchParams.get('txnid');
        
        if (!txnid) {
          navigate('/payment-error', { state: { error: 'Transaction ID missing' } });
          return;
        }

        // Call your backend to verify payment status
        const response = await axios.get(`/api/transaction/${txnid}`);
        const { status } = response.data;

        // Redirect based on status
        if (status === 'success') {
          navigate(`/payment-success?txnid=${txnid}`);
        } else if (status === 'failed') {
          navigate(`/payment-failed?txnid=${txnid}`);
        } else {
          // Handle pending/unknown statuses
          navigate(`/payment-pending?txnid=${txnid}`);
        }
      } catch (error) {
        console.error('Payment status check failed:', error);
        navigate('/payment-error', { state: { error: error.message } });
      }
    };

    checkPaymentStatus();
  }, [location, navigate]);

  return (
    <div className="payment-status-container">
      <h2>Processing your payment...</h2>
      <div className="spinner"></div>
      <p>Please wait while we verify your transaction</p>
    </div>
  );
};

export default PaymentStatus;