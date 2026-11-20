const teams = [
  { name: 'Boys Team', home: 'Yellow', away: 'Green', mark: '⚽' },
  { name: 'Girls Team', home: 'Blue', away: 'White', mark: '⚽' },
  { name: 'Junior Academy', home: 'Blue', away: 'White', mark: '★' }
];
export default function Home() {
  return <main>
    <nav className="nav"><a className="brand" href="#"><span className="crest">🐆</span><span>CHEBUKWABI JS<small>INGWE YA MATERE</small></span></a><div className="links"><a href="#about">About</a><a href="#teams">Teams</a><a href="#contact">Contact</a><a className="login" href="mailto:0724711658">Get in touch</a></div></nav>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">ONE CLUB · ONE FAMILY · ONE DREAM</p><h1>THE PRIDE OF<br/><em>CHEBUKWABI.</em></h1><p className="lead">Building talent, character and community through the beautiful game.</p><div className="actions"><a className="primary" href="#teams">MEET OUR TEAMS</a><a className="secondary" href="#about">OUR STORY ↗</a></div></div><div className="hero-art"><div className="sun"></div><div className="big-cat">🐆</div><div className="motto">INGWE<br/>YA MATERE</div><div className="vertical">CHEBUKWABI JS · KENYA</div></div><div className="hero-foot"><span>EST. COMMUNITY · KENYA</span><span>PLAY WITH PRIDE ◈</span></div></section>
    <section className="intro" id="about"><div><p className="eyebrow dark">OUR IDENTITY</p><h2>More than a team.<br/><em>A community.</em></h2></div><p>CHEBUKWABI JS is committed to nurturing football talent, creating opportunities for young players and bringing our community together through sport. With courage, discipline and teamwork, we play for something bigger than ourselves.</p></section>
    <section className="teams" id="teams"><p className="eyebrow">THE CLUB FAMILY</p><h2>OUR TEAMS</h2><div className="team-grid">{teams.map(t=><article className="team-card" key={t.name}><div className="team-mark">{t.mark}</div><p className="eyebrow">CHEBUKWABI JS</p><h3>{t.name}</h3><div className="kit"><span>HOME <b>{t.home}</b></span><span>AWAY <b>{t.away}</b></span></div></article>)}</div></section>
    <section className="callout"><p className="eyebrow">INGWE YA MATERE</p><h2>THE FUTURE<br/>IS <em>OURS TO BUILD.</em></h2><a className="primary" href="#contact">JOIN THE JOURNEY</a></section>
    <footer id="contact"><div><a className="brand" href="#"><span className="crest">🐆</span><span>CHEBUKWABI JS<small>INGWE YA MATERE</small></span></a><p>Football. Character. Community.</p></div><div><p className="eyebrow">CONTACT THE CLUB</p><a href="tel:0724711658">0724 711 658</a><p>Kenya</p></div><div className="copyright">© {new Date().getFullYear()} CHEBUKWABI JS. ALL RIGHTS RESERVED.</div></footer>
  </main>;
}
