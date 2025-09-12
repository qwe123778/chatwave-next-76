export const SimpleBirthdayWebsite = () => {
  const friendName = "Amazing Friend";

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'Poppins, sans-serif',
      background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Confetti Animation */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 10
      }}>
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#ec4899', '#f59e0b', '#8b5cf6', '#10b981', '#3b82f6', '#f97316'][Math.floor(Math.random() * 6)],
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animation: `confettiFall ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1rem'
      }}>
        <div style={{ animation: 'bounceIn 1s ease-out' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Happy Birthday
          </h1>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontFamily: 'Dancing Script, cursive',
            fontWeight: 'bold',
            color: '#fbbf24',
            marginBottom: '2rem'
          }}>
            {friendName}! 🎉
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            lineHeight: '1.6'
          }}>
            Today is all about celebrating the amazing person you are!<br />
            Here's a little something special just for you ✨
          </p>
          <button
            onClick={() => document.getElementById('wishes')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: 'white',
              color: '#8b5cf6',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              transform: 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            See Your Birthday Wishes 🎁
          </button>
        </div>
      </section>

      {/* Wishes Section */}
      <section id="wishes" style={{
        padding: '4rem 1rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'Dancing Script, cursive',
            textAlign: 'center',
            color: 'white',
            marginBottom: '3rem'
          }}>
            Birthday Wishes Just for You 💖
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🎂', title: 'Another Year of Awesome', message: 'May this new year bring you endless joy, laughter, and all the happiness your heart can hold!' },
              { icon: '🌟', title: 'Shine Bright', message: 'You light up every room you enter. Keep being the amazing, inspiring person you are!' },
              { icon: '🎈', title: 'Dream Big', message: 'May all your dreams come true this year and beyond. The world is yours to explore!' },
              { icon: '💝', title: 'You Are Loved', message: 'Today we celebrate not just your birthday, but the wonderful gift you are to everyone around you!' }
            ].map((wish, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{wish.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  {wish.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6'
                }}>
                  {wish.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Memory Section */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'Dancing Script, cursive',
            color: 'white',
            marginBottom: '3rem'
          }}>
            Photo Memories 📸
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {['📷', '🖼️', '📸'].map((icon, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  padding: '3rem 2rem',
                  border: '2px dashed rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{icon}</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
                  Add your favorite memory photo here
                </p>
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: 'white',
              lineHeight: '1.6'
            }}>
              "The best memories are made with the best people, and you're definitely one of them!" 💫
            </p>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section style={{
        padding: '4rem 1rem',
        background: 'rgba(255,255,255,0.05)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>💖</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'Dancing Script, cursive',
            color: 'white',
            marginBottom: '2rem'
          }}>
            A Special Message
          </h2>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '3rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <p style={{
              fontSize: '1.3rem',
              color: 'white',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Dear {friendName},
            </p>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.8'
            }}>
              On this special day, I want you to know how grateful I am to have you in my life. 
              Your friendship means the world to me, and I hope this new year brings you everything 
              your heart desires. You deserve all the happiness, love, and amazing adventures 
              that life has to offer!
            </p>
            <p style={{
              fontSize: '1.2rem',
              color: 'white',
              marginTop: '2rem',
              fontWeight: '500'
            }}>
              Happy Birthday! 🎉🎂✨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.3)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: '1.3rem'
        }}>
          Made with ❤️ for a very special birthday! 🎂
        </p>
      </footer>

      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};