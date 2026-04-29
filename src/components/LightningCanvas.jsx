const PATCHES = [
  { w: 560, h: 420, top:  '0%',  left: '0%',   blue: true,  dur: 18, delay: 0    },
  { w: 480, h: 360, top:  '8%',  left: '58%',  blue: false, dur: 22, delay: -6   },
  { w: 400, h: 320, top: '26%',  left: '18%',  blue: false, dur: 26, delay: -11  },
  { w: 520, h: 400, top: '33%',  left: '68%',  blue: true,  dur: 20, delay: -4   },
  { w: 380, h: 300, top: '50%',  left: '38%',  blue: true,  dur: 24, delay: -9   },
  { w: 440, h: 340, top: '56%',  left: '2%',   blue: false, dur: 28, delay: -14  },
  { w: 500, h: 380, top: '66%',  left: '53%',  blue: true,  dur: 19, delay: -3   },
  { w: 420, h: 320, top: '78%',  left: '22%',  blue: false, dur: 23, delay: -8   },
  { w: 340, h: 270, top: '87%',  left: '72%',  blue: true,  dur: 27, delay: -13  },
  { w: 480, h: 360, top: '13%',  left: '36%',  blue: false, dur: 21, delay: -5   },
];

const LightningCanvas = () => (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 1,
      overflow: 'hidden',
    }}>
      {PATCHES.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: p.top, left: p.left,
            width: p.w, height: p.h,
            borderRadius: '50%',
            background: p.blue
              ? 'radial-gradient(ellipse at center, rgba(0,210,255,0.42) 0%, rgba(0,160,240,0.16) 50%, transparent 100%)'
              : 'radial-gradient(ellipse at center, rgba(168,85,255,0.38) 0%, rgba(120,50,230,0.13) 50%, transparent 100%)',
            filter: 'blur(60px)',
            animation: `drift${i % 3} ${p.dur}s ease-in-out ${p.delay}s infinite`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
);

export default LightningCanvas;
