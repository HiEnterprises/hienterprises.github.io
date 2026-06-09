import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ModeToggles() {
  return (
    <div style={{ marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
      <p>you wanting eassiers to see in night light modes? click bustons below :)</p>
      <button 
        type="button" 
        onClick={() => { document.body.style.backgroundColor = '#00008b'; document.body.style.color = '#ffffff'; }}
        style={{ margin: '5px', padding: '5px 15px', cursor: 'pointer', fontFamily: 'Century Gothic' }}
      >
        mode darcs
      </button>
      <button 
        type="button" 
        onClick={() => { document.body.style.backgroundColor = '#ffff00'; document.body.style.color = '#000000'; }}
        style={{ margin: '5px', padding: '5px 15px', cursor: 'pointer', fontFamily: 'Century Gothic' }}
      >
        mode lihts
      </button>
    </div>
  );
}

export function MyladHome() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <p id="paraheadings" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        welcometo mylad-gurgland.net , place where you buys good qualities tech !
      </p>
      <br /><br />
      
      <p>
        Our head offices situateds in Gurgville, place in Gurgland. You see can image below image down there:-&gt;
      </p>
      <img src="/mylad/pics/office.png" id="office" alt="MyLad Office" style={{ maxWidth: '90%', height: 'auto', border: '2px solid black' }} />
      <br /><br />
      
      <p>Our CEO his name is John Smith see image of below his now:</p>
      <img src="/mylad/pics/scammer.png" height="400" alt="John Smith CEO" style={{ maxWidth: '90%', height: 'auto' }} />
      <br /><br />
      
      <p>The right products are designed to be beautiful.</p>
      <p>If do you wanting findings about more our of product? Clicks button above below :)</p>
      
      <br />
      <p id="paraheadings" style={{ fontSize: '20px', fontWeight: 'bold' }}>Promotional content for latest product:<br /></p>
      <video height="350" controls style={{ maxWidth: '90%' }}>
        <source src="/mylad/vids/7_MyLap.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Embedded Snake Game access */}
      <div style={{ marginTop: '40px', padding: '20px', border: '3px dashed #333', display: 'inline-block', borderRadius: '8px' }}>
        <h3>🕹️ Play MyLad Retro Snake Game!</h3>
        <p>Try out our brand new, fully interactive game page!</p>
        <Link to="/mylad/snakegame" style={{ display: 'inline-block', padding: '10px 20px', background: 'black', color: 'yellow', textDecoration: 'none', fontWeight: 'bold', border: '2px solid yellow' }}>
          PLAY GAME
        </Link>
      </div>

      <ModeToggles />
      <p style={{ marginTop: '20px', fontSize: '12px' }}>Copyright (c) MyLad Gurgland Inc. 2020. All Rights Reserved.</p>
    </div>
  );
}

export function MyladMyPhones() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <p id="paraheadings" style={{ fontSize: '24px', fontWeight: 'bold' }}>MyPhones ranges</p>
      <br />
      <p>*CLICKINGS* See plase MyPhone items model in screens belows;</p>
      <br /><br />

      <u><h2>MyPhone E</h2></u>
      <br />
      <img src="/mylad/pics/myphonee.png" height="300" alt="MyPhone E" style={{ maxWidth: '90%' }} />
      <br />
      <button type="button" style={{ margin: '15px 0' }}>
        <Link to="/mylad/myphone-e" style={{ textDecoration: 'none', color: 'inherit' }}>MyPhone E</Link>
      </button>
      <br /><br />

      <u><h2>MyPhone</h2></u>
      <img src="/mylad/pics/myphone.png" height="300" alt="MyPhone" style={{ maxWidth: '90%' }} />
      <br />
      <button type="button" style={{ margin: '15px 0' }}>
        <Link to="/mylad/myphone-detail" style={{ textDecoration: 'none', color: 'inherit' }}>MyPhone</Link>
      </button>

      <ModeToggles />
      <p style={{ marginTop: '20px', fontSize: '12px' }}>Copyright (c) MyLad Gurgland Inc. 2020. All Rights Reserved.</p>
    </div>
  );
}

export function MyladMyPhoneDetail() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <p id="paraheadings" style={{ fontSize: '24px', fontWeight: 'bold' }}>MyPhone</p>
      <br />
      <video height="350" controls style={{ maxWidth: '90%' }}>
        <source src="/mylad/vids/2_MyPhone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br /><br />
      <h1 id="p11" style={{ fontSize: '36px', fontWeight: 'bold' }}>£136.73</h1>
      <br />
      <Link to="/mylad/buynow">
        <img src="/mylad/pics/buynow.gif" alt="Buy Now" style={{ border: 'none' }} />
      </Link>

      <ModeToggles />
      <p style={{ marginTop: '20px', fontSize: '12px' }}>Copyright (c) MyLad Gurgland Inc. 2020. All Rights Reserved.</p>
    </div>
  );
}

export function MyladMyPhoneEDetail() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <p id="paraheadings" style={{ fontSize: '24px', fontWeight: 'bold' }}>MyPhone E</p>
      <br />
      <video height="350" controls style={{ maxWidth: '90%' }}>
        <source src="/mylad/vids/5_MyPhone_E.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br /><br />
      <h1 id="p11" style={{ fontSize: '36px', fontWeight: 'bold' }}>£136.73</h1>
      <br />
      <Link to="/mylad/buynow">
        <img src="/mylad/pics/buynow.gif" alt="Buy Now" style={{ border: 'none' }} />
      </Link>

      <ModeToggles />
      <p style={{ marginTop: '20px', fontSize: '12px' }}>Copyright (c) MyLad Gurgland Inc. 2020. All Rights Reserved.</p>
    </div>
  );
}

export function MyladRanges() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <p id="paraheadings" style={{ fontSize: '24px', fontWeight: 'bold' }}>MyLad ranges</p>
      <br />
      <p>*CLIC * plaes experience MyLad to trhe Max with dese wonerful product elbow;</p>
      <br /><br />

      <u><h2>MyLad 2.0D</h2></u>
      <br />
      <img src="/mylad/pics/mylad_2d.png" height="300" alt="MyLad 2.0D" style={{ maxWidth: '90%' }} />
      <br />
      <button type="button" style={{ margin: '15px 0' }}>
        <Link to="/mylad/about" style={{ textDecoration: 'none', color: 'inherit' }}>MyLad 2.0D Details</Link>
      </button>
      <br /><br />

      <u><h2>MyLad 2.0E</h2></u>
      <img src="/mylad/pics/mylad_2e.png" height="300" alt="MyLad 2.0E" style={{ maxWidth: '90%' }} />
      <br />
      <button type="button" style={{ margin: '15px 0' }}>
        <Link to="/mylad/about" style={{ textDecoration: 'none', color: 'inherit' }}>MyLad 2.0E Details</Link>
      </button>
      <br /><br />

      <u><h2>MyLad 2.0E kid edition tablet game app fun pigeon</h2></u>
      <img src="/mylad/pics/mylad_kid.png" height="300" alt="MyLad Kid" style={{ maxWidth: '90%' }} />
      <br />
      <button type="button" style={{ margin: '15px 0' }}>
        <Link to="/mylad/about" style={{ textDecoration: 'none', color: 'inherit' }}>MyLad Kid Edition Details</Link>
      </button>

      <ModeToggles />
      <p style={{ marginTop: '20px', fontSize: '12px' }}>Copyright (c) MyLad Gurgland Inc. 2020. All Rights Reserved.</p>
    </div>
  );
}

// Retro Placeholder Pages for links missing in original backup
export function MyladMyTvRanges() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h2>MyTV Ranges</h2>
      <p>This section is under construction. Check back in a moment for amazing television ranges from MyLad!</p>
      <ModeToggles />
    </div>
  );
}

export function MyladMyTendoRanges() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h2>MyTendo Ranges</h2>
      <p>Under construction. The next-generation gaming products by MyLad are coming soon.</p>
      <ModeToggles />
    </div>
  );
}

export function MyladAbout() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h2>About MyLad Incorporated</h2>
      <p>MyLad is the leading designer of budget tech in Gurgland, providing custom smart products since 2013.</p>
      <p>CEO: John Smith | HQ: Gurgville, Gurgland</p>
      <ModeToggles />
    </div>
  );
}

// MyLad Checkout Flow
export function MyladBuyX() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mylad/purchase');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h2>
        <u><b><i>You will now be redirected in 3 seconds to our product purchasing website operated by MyLad to purchase this product.</i></b></u>
      </h2>
      <br /><br />
      <div style={{ fontSize: '24px' }}>⏳ Loading...</div>
    </div>
  );
}

export function MyladPurchase() {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/mylad/confirm', { state: { product, name } });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h1>mylad-gurgland.net Product purchase websagesite</h1>
      <h1>--------------------------------</h1>
      <br />
      <p>hi please put email phone fax card detail address and date of birth in form to to purchase [product from mylad-gurgland.net websiteform</p>
      <br />
      
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', border: '1px solid #ccc', padding: '20px', borderRadius: '4px' }}>
        PLEASE TYPE NAME OF PRODUCT YOU BUY ---&gt;:* <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required /><br /><br />
        NAME: in FUL* <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
        Email:* <input type="text" required /><br /><br />
        phone:* <input type="text" required /><br /><br />
        fAx:[optionla]: <input type="text" /><br /><br />
        credit card no xxxx xxxx xxxx xxxx:* <input type="text" required /><br /><br />
        expreiey date xx/yy:* <input type="text" required /><br /><br />
        security no xxx:* <input type="text" required /><br /><br />
        date of birtfh *<input type="text" required /><br /><br />
        ADDRESS*:<br />
        <textarea required style={{ width: '100%' }}></textarea><br /><br />
        <button type="submit">CONFIRM</button>
      </form>
      
      <br /><br />
      <h1>👍</h1>
      <p>copyright (c) 2013 MyLad Incorporated. All Rights Reserved. all word like MyTV MyLad etc are all intelectial propertie of MyLad Inc.</p>
      <p>版权所有（c）2013 MyLad Incorporated。 版权所有。 MyTV MyLad等所有词语都是MyLad Inc.的知识产权。</p>
    </div>
  );
}

export function MyladConfirm() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h1>mylad-gurgland.net Product purchase websagesite</h1>
      <h1>--------------------------------</h1>
      <br /><br />
      <p>YOU ABOUT TO PAY €money for {`{PRODUCT}`}. WOULD YOU LIEK TO CONTINUE.</p>
      <br /><br />
      <button onClick={() => navigate('/mylad/thanks')}>YES</button>
      <button onClick={() => navigate('/mylad/thanks')}>YES</button>
      <br /><br />
      <h1>👍</h1>
      <p>copyright (c) 2013 MyLad Incorporated. All Rights Reserved. all word like MyTV MyLad etc are all intelectial propertie of MyLad Inc.</p>
    </div>
  );
}

export function MyladThanks() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h1>mylad-gurgland.net Product purchase websagesite</h1>
      <h1>--------------------------------</h1>
      <br /><br />
      <p>thank .! you pay forproduct from HiTech webite. you get e -mail wthin the next 10 hors for resit.product now be delivgered to your door within 12 month.!</p>
      <br /><br />
      <button type="button">
        <Link to="/mylad" style={{ textDecoration: 'none', color: 'inherit' }}>🛖Home</Link>
      </button>
      <br /><br />
      <h1>👍</h1>
      <p>copyright (c) 2013 MyLad Incorporated. All Rights Reserved. all word like MyTV MyLad etc are all intelectial propertie of MyLad Inc.</p>
    </div>
  );
}

// Playable retro Canvas Snake game
export function MyladSnakeGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('mylad_snake_highscore') || '0', 10));
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);

  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ]);
  const [direction, setDirection] = useState('RIGHT');
  const [apple, setApple] = useState({ x: 5, y: 5 });

  const GRID_SIZE = 20;
  const CANVAS_WIDTH = 400;
  const CANVAS_HEIGHT = 400;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code) && direction !== 'DOWN') setDirection('UP');
      if (['ArrowDown', 'KeyS'].includes(e.code) && direction !== 'UP') setDirection('DOWN');
      if (['ArrowLeft', 'KeyA'].includes(e.code) && direction !== 'RIGHT') setDirection('LEFT');
      if (['ArrowRight', 'KeyD'].includes(e.code) && direction !== 'LEFT') setDirection('RIGHT');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver || paused) return;

    const tick = () => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };
        if (direction === 'UP') head.y -= 1;
        if (direction === 'DOWN') head.y += 1;
        if (direction === 'LEFT') head.x -= 1;
        if (direction === 'RIGHT') head.x += 1;

        const cols = CANVAS_WIDTH / GRID_SIZE;
        const rows = CANVAS_HEIGHT / GRID_SIZE;
        if (
          head.x < 0 || head.x >= cols ||
          head.y < 0 || head.y >= rows ||
          prevSnake.some(part => part.x === head.x && part.y === head.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        if (head.x === apple.x && head.y === apple.y) {
          setScore((s) => {
            const nextScore = s + 10;
            if (nextScore > highScore) {
              setHighScore(nextScore);
              localStorage.setItem('mylad_snake_highscore', nextScore.toString());
            }
            return nextScore;
          });
          let newApple;
          while (true) {
            newApple = {
              x: Math.floor(Math.random() * cols),
              y: Math.floor(Math.random() * rows)
            };
            if (!newSnake.some(part => part.x === newApple.x && part.y === newApple.y)) {
              break;
            }
          }
          setApple(newApple);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    };

    const interval = setInterval(tick, 110);
    return () => clearInterval(interval);
  }, [direction, apple, gameOver, paused, highScore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw background
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 0, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= CANVAS_WIDTH; i += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, CANVAS_HEIGHT);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(CANVAS_WIDTH, i);
      ctx.stroke();
    }

    // Draw apple
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(
      apple.x * GRID_SIZE + GRID_SIZE / 2,
      apple.y * GRID_SIZE + GRID_SIZE / 2,
      GRID_SIZE / 2 - 2,
      0,
      2 * Math.PI
    );
    ctx.fill();

    // Draw snake
    snake.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? '#ffff00' : '#00ffff';
      ctx.strokeStyle = '#000000';
      ctx.fillRect(part.x * GRID_SIZE + 1, part.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2);
      ctx.strokeRect(part.x * GRID_SIZE + 1, part.y * GRID_SIZE + 1, GRID_SIZE - 2, GRID_SIZE - 2);
    });
  }, [snake, apple]);

  const resetGame = () => {
    setSnake([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ]);
    setDirection('RIGHT');
    setApple({ x: 5, y: 5 });
    setScore(0);
    setGameOver(false);
    setPaused(false);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Century Gothic' }}>
      <h2>MyLad Retro Snake Game</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', margin: '0 auto', padding: '10px 0', fontWeight: 'bold' }}>
        <span>SCORE: {score}</span>
        <span>HIGH SCORE: {highScore}</span>
      </div>

      <div style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto', border: '5px solid yellow', backgroundColor: '#111' }}>
        <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
        {gameOver && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', color: 'red', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            zIndex: 10
          }}>
            <h3 style={{ fontSize: '32px', margin: '0 0 15px 0' }}>GAME OVER</h3>
            <button onClick={resetGame} style={{ padding: '8px 20px', fontSize: '16px', background: 'yellow', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'Century Gothic' }}>
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setPaused(!paused)} style={{ margin: '5px', padding: '5px 15px', fontFamily: 'Century Gothic' }}>
          {paused ? 'RESUME' : 'PAUSE'}
        </button>
        <button onClick={resetGame} style={{ margin: '5px', padding: '5px 15px', fontFamily: 'Century Gothic' }}>RESET</button>
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Use Arrow keys or W/A/S/D to play. Eat the red apples to score points!
      </p>

      <ModeToggles />
    </div>
  );
}
