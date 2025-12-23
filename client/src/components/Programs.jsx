import React from 'react';

function Programs() {

    const headerStyle = { textAlign: 'center', padding: '40px 0', backgroundColor: '#000', color: '#fff' };
    const gradientTextStyle = {
        background: 'linear-gradient(45deg, #8b0000, #ff0000, #ff4d4d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
    };

    const stickyBoxStyle = {
        position: 'sticky',
        top: '120px',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#000'
    };

    const imageStickyStyle = {
        position: 'sticky',
        top: '100px',
        background: '#111',
        border: '1px solid #333',
        borderRadius: '25px',
        overflow: 'hidden',
        height: '450px',
        boxShadow: '0 -20px 40px rgba(0,0,0,0.7)'
    };

    return (
        <div style={{ backgroundColor: '#000' }}>
            <header className="programs-header" style={headerStyle}>
                <h1 style={{ display: 'inline-block', fontSize: '3.3rem', marginBottom: '10px' }}>
                    Our Fitness <span style={gradientTextStyle}>Programs</span>
                </h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: '#bbbbbb' }}>
                    Explore our carefully designed fitness programs created by expert trainers to help you reach your personal fitness goals.
                </p>
            </header>

            <section style={{ background: '#000', color: '#fff', fontFamily: 'sans-serif', display: 'flex', padding: '80px 50px', gap: '50px' }}>

                {/* Text Content Column */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '150px' }}>

                    {/* Section 1 */}
                    <div style={stickyBoxStyle}>
                        <h4 style={{ fontSize: '3rem', margin: 0, fontWeight: 800, lineHeight: 1.2 }}>
                            WEIGHT <span style={gradientTextStyle}>LOSS</span>
                        </h4>
                        <p style={{ color: '#888', margin: '25px 0', fontSize: '1.1rem', maxWidth: '380px' }}>
                            Capture the essence of fitness transformation. Right side scroll panni overlapping image effect-ah parunga.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#ccc' }}>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Personalized Workout Plans</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Expert Nutritional Guidance</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> 24/7 Trainer Support</li>
                        </ul>
                        <p
                            style={{
                                color: '#fff',
                                margin: '0 0 30px 0',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>🕒</span>
                            <strong style={{ color: '#ff4d4d' }}>Timings:</strong> Mon–Sat | 6 AM – 10 PM
                        </p>

                        <button style={{ background: 'linear-gradient(90deg, #8b0000, #ff0000)', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '50px', width: 'fit-content', fontWeight: 'bold', cursor: 'pointer' }}>JOIN NOW</button>
                    </div>

                    {/* Section 2 */}
                    <div style={stickyBoxStyle}>
                        <h3 style={{ fontSize: '3rem', margin: 0, fontWeight: 800, lineHeight: 1.2 }}>
                            STRENGTH <span style={gradientTextStyle}>GAIN</span>
                        </h3>
                        <p style={{ color: '#888', margin: '25px 0', fontSize: '1.1rem', maxWidth: '380px' }}>
                            Capture the essence of fitness transformation. Right side scroll panni overlapping image effect-ah parunga.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#ccc' }}>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Personalized Workout Plans</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Expert Nutritional Guidance</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> 24/7 Trainer Support</li>
                        </ul>
                        <p
                            style={{
                                color: '#fff',
                                margin: '0 0 30px 0',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>🕒</span>
                            <strong style={{ color: '#ff4d4d' }}>Timings:</strong> Mon–Sat | 6 AM – 10 PM
                        </p>

                        <button style={{ background: 'linear-gradient(90deg, #8b0000, #ff0000)', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '50px', width: 'fit-content', fontWeight: 'bold', cursor: 'pointer' }}>JOIN NOW</button>
                    </div>

                    {/* Yoga Section */}
                    <div style={stickyBoxStyle}>
                        <h3 style={{ fontSize: '3.5rem', margin: 0, fontWeight: 800, lineHeight: 1.2 }}>
                            YOGA <span style={gradientTextStyle}>ZEN</span>
                        </h3>
                        <p style={{ color: '#888', margin: '25px 0', fontSize: '1.1rem', maxWidth: '380px' }}>
                            Capture the essence of fitness transformation. Right side scroll panni overlapping image effect-ah parunga.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#ccc' }}>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Personalized Workout Plans</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Expert Nutritional Guidance</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> 24/7 Trainer Support</li>
                        </ul>
                        <p
                            style={{
                                color: '#fff',
                                margin: '0 0 30px 0',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>🕒</span>
                            <strong style={{ color: '#ff4d4d' }}>Timings:</strong> Mon–Sat | 6 AM – 10 PM
                        </p>

                        <button style={{ background: 'linear-gradient(90deg, #8b0000, #ff0000)', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '50px', width: 'fit-content', fontWeight: 'bold', cursor: 'pointer' }}>JOIN NOW</button>
                    </div>

                    {/* Yoga Section */}
                    <div style={stickyBoxStyle}>
                        <h3 style={{ fontSize: '3.5rem', margin: 0, fontWeight: 800, lineHeight: 1.2 }}>
                            YOGA <span style={gradientTextStyle}>ZEN</span>
                        </h3>
                        <p style={{ color: '#888', margin: '25px 0', fontSize: '1.1rem', maxWidth: '380px' }}>
                            Capture the essence of fitness transformation. Right side scroll panni overlapping image effect-ah parunga.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#ccc' }}>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Personalized Workout Plans</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> Expert Nutritional Guidance</li>
                            <li><span style={{ color: '#ff0000' }}>✔</span> 24/7 Trainer Support</li>
                        </ul>
                        <p
                            style={{
                                color: '#fff',
                                margin: '0 0 30px 0',
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>🕒</span>
                            <strong style={{ color: '#ff4d4d' }}>Timings:</strong> Mon–Sat | 6 AM – 10 PM
                        </p>

                        <button style={{ background: 'linear-gradient(90deg, #8b0000, #ff0000)', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '50px', width: 'fit-content', fontWeight: 'bold', cursor: 'pointer' }}>JOIN NOW</button>
                    </div>

                </div>

                {/* Image Sticky Column */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '150px' }}>
                    <div style={imageStickyStyle}>
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Weight Loss" />
                    </div>
                    <div style={imageStickyStyle}>
                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Strength" />
                    </div>
                    <div style={imageStickyStyle}>
                        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Yoga" />
                    </div>
                    <div style={imageStickyStyle}>
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Weight Loss" />
                    </div>
                </div>
            </section>

            <div style={{ height: '160px', backgroundColor: '#000' }}></div>
        </div>
    );
}

export default Programs;