import React, { useState } from 'react';

function Memberships() {

  const YOUR_UPI_ID = "kevinarockiam806-2@okaxis"; 
  const YOUR_NAME = "Kevin Gym"; //

  // State
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [screenshot, setScreenshot] = useState(null); // Screenshot State
  
  // Purchased Plans List
  const [purchasedPlans, setPurchasedPlans] = useState([]); 

  // --- Styles ---
  const containerStyle = { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px', padding: '50px 20px', backgroundColor: '#000', minHeight: '80vh' };
  const planBoxStyle = { background: '#1a1a1a', border: '1px solid #333', width: '100%', maxWidth: '310px', padding: '30px', borderRadius: '15px', textAlign: 'center', transition: '0.3s', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', color: '#fff', };
  const titleBoxBase = { padding: '10px', borderRadius: '8px', fontSize: '20px', fontWeight: 'bold', color: '#000', textTransform: 'uppercase', marginBottom: '20px' };
  const silverBG = { ...titleBoxBase, background: 'linear-gradient(135deg, #fafafaff 0%, #ffffff 50%, #ffffffff 100%)', boxShadow: '0 4px 15px rgba(189, 195, 199, 0.4)' };
  const goldBG = { ...titleBoxBase, background: 'linear-gradient(135deg, #d4af37 0%, #fff2ac 50%, #9a7b0c 100%)', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)' };
  const platinumBG = { ...titleBoxBase, background: 'linear-gradient(135deg, #e5e4e2 0%, #ffffff 50%, #b4b4b4 100%)', boxShadow: '0 4px 15px rgba(229, 228, 226, 0.4)' };
  const priceStyle = { fontSize: '32px', fontWeight: 'bold', margin: '20px 0' };
  const liStyle = { fontSize: '14px', padding: '10px 0', borderBottom: '1px solid #333', color: '#ccc', textAlign: 'left' };
  
  const btnStyle = { display: 'block', width: '100%', marginTop: '25px', padding: '12px 0', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' };
  const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(8px)' };
  // Modal height increased slightly for upload section
  const modalContentStyle = { backgroundColor: '#fff', width: '90%', maxWidth: '400px', maxHeight:'90vh', overflowY:'auto', padding: '30px', borderRadius: '15px', textAlign: 'center', color: '#000', position: 'relative', boxShadow: '0 0 25px rgba(255, 46, 46, 0.3)' };

  const handleHover = (e, isHover, isPurchased) => {
    if (isPurchased) return;
    e.currentTarget.style.transform = isHover ? 'translateY(-10px)' : 'translateY(0)';
    e.currentTarget.style.borderColor = isHover ? '#ff2e2e' : '#333';
  };

  // Reset function when closing modal
  const closePaymentModal = () => { 
    setSelectedPlan(null); 
    setIsProcessing(false); 
    setScreenshot(null); // Clear screenshot
  };

  // Handle File Selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(URL.createObjectURL(e.target.files[0])); // Preview create pannum
    }
  };

  // Submit Logic
  const handleSubmitProof = () => {
    if (!screenshot) return; // File illana work aagathu

    setIsProcessing(true);
    // Simulation delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentDone(true);
      setPurchasedPlans([...purchasedPlans, selectedPlan.title]);
      setTimeout(() => { closePaymentModal(); }, 3000);
    }, 2000);
  };

  const plans = [
    { title: "Basic Plan", price: "1", bgStyle: silverBG, features: ["✔ Access to gym floor", "✔ Basic equipment usage", "✔ Locker access", "✘ No personal trainer"] },
    { title: "Standard Plan", price: "999", bgStyle: goldBG, features: ["✔ Access to gym floor", "✔ All equipment usage", "✔ 2 Personal sessions weekly", "✔ Free diet consultation"] },
    { title: "Premium Plan", price: "1499", bgStyle: platinumBG, features: ["✔ Unlimited access", "✔ Personal trainer", "✔ Customized diet plan", "✔ Weekly body analysis", "✔ Steam bath"] }
  ];

  const getUpiLink = (amount) => `upi://pay?pa=${YOUR_UPI_ID}&pn=${encodeURIComponent(YOUR_NAME)}&am=${amount}&cu=INR`;
  const getQRCodeUrl = (amount) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(getUpiLink(amount))}`;

  return (
    <div style={{ backgroundColor: '#000', paddingBottom: '50px' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', padding: '50px 0', fontSize: '32px' }}>
        MEMBERSHIP <span style={{ color: '#ff2e2e' }}>PLANS</span>
      </h2>

      <div style={containerStyle}>
        {plans.map((plan, index) => {
          const isPurchased = purchasedPlans.includes(plan.title);
          return (
            <div 
              key={index} 
              style={{
                ...planBoxStyle,
                opacity: isPurchased ? 0.7 : 1,
                borderColor: isPurchased ? '#00b894' : '#333'
              }}
              onMouseOver={(e) => handleHover(e, true, isPurchased)}
              onMouseOut={(e) => handleHover(e, false, isPurchased)}
            >
              <div style={plan.bgStyle}>{plan.title}</div>
              <div style={priceStyle}>₹{plan.price} <span style={{fontSize:'14px', opacity:0.6}}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {plan.features.map((f, i) => <li key={i} style={liStyle}>{f}</li>)}
              </ul>
              <button 
                disabled={isPurchased}
                onClick={() => !isPurchased && setSelectedPlan(plan)} // Opens Modal
                style={{
                  ...btnStyle,
                  backgroundColor: isPurchased ? '#1a1a1a' : '#ff2e2e',
                  color: isPurchased ? '#00b894' : '#fff',
                  border: isPurchased ? '2px solid #00b894' : 'none',
                  cursor: isPurchased ? 'default' : 'pointer'
                }}
                onMouseOver={(e) => !isPurchased && (e.target.style.backgroundColor = '#cc2424')}
                onMouseOut={(e) => !isPurchased && (e.target.style.backgroundColor = '#ff2e2e')}
              >
                {isPurchased ? '✔ CURRENT PLAN' : 'JOIN NOW'}
              </button>
            </div>
          );
        })}
      </div>

      {/* --- PAYMENT & UPLOAD MODAL --- */}
      {selectedPlan && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button onClick={closePaymentModal} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color:'#333' }}>✖</button>

            {!paymentDone ? (
              <div>
                <h3 style={{ margin: '0 0 10px 0', color:'#000' }}>Scan & Pay</h3>
                
                {/* QR Code */}
                <div style={{ border: '2px dashed #ff2e2e', padding: '10px', borderRadius: '10px', display: 'inline-block', backgroundColor: '#f8f8f8' }}>
                  <img src={getQRCodeUrl(selectedPlan.price)} alt="UPI QR Code" style={{ width: '160px', height: '160px', display:'block' }} />
                </div>
                
                <a 
                  href={getUpiLink(selectedPlan.price)} 
                  style={{ display: 'block', width: '100%', padding: '10px 0', backgroundColor: '#00b894', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '15px', fontSize: '14px' }}
                >
                   PAY VIA UPI APP
                </a>

                <hr style={{margin: '20px 0', border: '0', borderTop: '1px solid #eee'}}/>

                {/* --- UPLOAD SECTION START --- */}
                <div style={{textAlign: 'left'}}>
                  <p style={{fontSize: '14px', fontWeight: 'bold', marginBottom: '8px'}}>Upload Payment Screenshot:</p>
                  
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    style={{ fontSize: '14px', marginBottom: '10px', width: '100%' }}
                  />

                  {/* Preview Image */}
                  {screenshot && (
                    <div style={{marginBottom: '10px', textAlign: 'center'}}>
                      <img src={screenshot} alt="Preview" style={{maxHeight: '100px', borderRadius: '5px', border: '1px solid #ddd'}} />
                    </div>
                  )}

                  {/* Verify Button - Disabled until screenshot uploaded */}
                  <button 
                    onClick={handleSubmitProof} 
                    disabled={!screenshot || isProcessing} // Screenshot illana click aagathu
                    style={{
                      ...btnStyle, 
                      backgroundColor: screenshot ? '#ff2e2e' : '#ccc', 
                      cursor: screenshot ? 'pointer' : 'not-allowed',
                      marginTop: '5px'
                    }}
                  >
                    {isProcessing ? 'Verifying...' : 'Verify & Activate Plan'}
                  </button>
                </div>
                {/* --- UPLOAD SECTION END --- */}

              </div>
            ) : (
              <div style={{padding: '20px 0'}}>
                <div style={{fontSize: '60px', color: '#00b894', marginBottom:'10px'}}>✔</div>
                <h3 style={{color:'#00b894'}}>Verification Successful!</h3>
                <p style={{marginTop:'10px'}}>Your <b>{selectedPlan.title}</b> is now Active.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Memberships;