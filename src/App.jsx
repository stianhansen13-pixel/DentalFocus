import { useEffect, useRef, useState } from 'react'
import { Icon } from './icons.jsx'
import {
  EMAIL, MAILTO, PHONE_TEL, PHONE_DISPLAY,
  nav, heroChips, fearPoints, services, omStats, team,
  inmanBenefits, inman, priceGroups, priceNotes, akutt, tannhelse,
  reviews, days, timeslots, purposes,
} from './data.js'

const Stars = ({ cls }) => <div className={cls}>★★★★★</div>

function Accordion({ items, prefix, open, toggle, accClass = 'acc' }) {
  return items.map((it) => {
    const isOpen = !!open[prefix + it.id]
    return (
      <div className={accClass} key={it.id}>
        <button className="acc-btn" onClick={() => toggle(prefix + it.id)}>
          <span className="q">{it.q}</span>
          <span className="sign">{isOpen ? '–' : '+'}</span>
        </button>
        {isOpen && (
          <div className="acc-body">
            {it.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
      </div>
    )
  })
}

export default function App() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const [menuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [kunde, setKunde] = useState(null)
  const [rev, setRev] = useState(0)
  const [revPaused, setRevPaused] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const revPausedRef = useRef(revPaused)
  revPausedRef.current = revPaused

  const isDesktop = w >= 900
  const isMobile = !isDesktop
  const visible = w >= 1000 ? 3 : w >= 640 ? 2 : 1
  const maxRev = Math.max(0, reviews.length - visible)
  const revIdx = Math.min(rev, maxRev)

  useEffect(() => {
    const u = () => setW(window.innerWidth)
    window.addEventListener('resize', u)
    return () => window.removeEventListener('resize', u)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      if (revPausedRef.current) return
      setRev((s) => (s >= maxRev ? 0 : s + 1))
    }, 4500)
    return () => clearInterval(t)
  }, [maxRev])

  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))
  const openTheForm = () => setShowForm(true)

  const submitForm = (e) => {
    e.preventDefault()
    const form = e.target
    if (!kunde) { setSendError('Velg om du er tidligere kunde (Ja/Nei).'); return }
    const fd = new FormData(form)
    fd.set('tidligere-kunde', kunde)
    const body = new URLSearchParams(fd).toString()
    setSending(true); setSendError(false)
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status)
        setSubmitted(true); setSending(false)
      })
      .catch(() => {
        setSending(false)
        setSendError('Noe gikk galt under sendingen. Ring oss på 64 91 72 50 eller send e-post til post@langhustannklinikk.no.')
      })
  }

  const resetForm = () => { setSubmitted(false); setKunde(null); setSendError(false); setSending(false) }

  return (
    <div id="top">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="#top" className="header-logo"><img src="/assets/logo-white.png" alt="Langhus Tannklinikk" /></a>
          {isDesktop && (
            <nav className="nav-desktop">
              {nav.map((l) => <a key={l.h} href={l.h} className="nav-link">{l.t}</a>)}
              <a href="#kontakt" className="btn btn-primary header-cta" onClick={openTheForm}>Bestill time</a>
            </nav>
          )}
          {isMobile && (
            <button className="burger" aria-label="Meny" onClick={() => setMenuOpen((s) => !s)}>
              <span></span><span></span><span></span>
            </button>
          )}
        </div>
        {isMobile && menuOpen && (
          <div className="mobile-menu">
            {nav.map((l) => <a key={l.h} href={l.h} className="mobile-link" onClick={() => setMenuOpen(false)}>{l.t}</a>)}
            <div className="mobile-actions">
              <a href={`tel:${PHONE_TEL}`} className="mobile-call">Ring oss</a>
              <a href="#kontakt" className="mobile-book" onClick={() => { setShowForm(true); setMenuOpen(false) }}>Bestill time</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob"></div>
        <div className="hero-grid">
          <div>
            <div className="eyebrow chip">Tannlege på Langhus</div>
            <h1>Tannbehandling i trygge, rolige hender</h1>
            <p>Hos Langhus Tannklinikk setter vi deg i fokus. Vi tar oss tid, forklarer underveis og legger til rette for smertefri behandling – også for deg som gruer deg til tannlegen.</p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-primary" onClick={openTheForm}>Bestill time</a>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">Ring {PHONE_DISPLAY}</a>
            </div>
            <div className="hero-chips">
              {heroChips.map((c) => (
                <div className="hero-chip" key={c}><span className="dot"></span>{c}</div>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <img src="/assets/hero.jpg" alt="Tannlege undersøker en avslappet pasient" />
          </div>
        </div>
      </section>

      {/* FEAR */}
      <section id="tannlegeskrekk" className="fear">
        <div className="fear-blob"></div>
        <div className="container section-pad fear-grid">
          <div>
            <div className="eyebrow teal">Redd for tannlegen?</div>
            <h2 className="h2">Du er i trygge hender hos oss</h2>
            <p>Tannlegeskrekk er vanlig – og helt forståelig. Våre tannleger har god erfaring med å behandle tannlegeskrekk og tilrettelegger behandlingen slik at du er komfortabel. Du har full kontroll på situasjonen hele veien.</p>
          </div>
          <div className="fear-list">
            {fearPoints.map((pt, i) => (
              <div className="fear-item" key={i}>
                <div className="ic"><Icon name={pt.icon} /></div>
                <div className="tx">{pt.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="tjenester">
        <div className="container section-pad">
          <div className="services-head">
            <div className="eyebrow">Våre tjenester</div>
            <h2 className="h2">Tannbehandling for hele familien</h2>
            <p className="lead">Fra rutineundersøkelser til estetisk tannbehandling og akutt hjelp – vi bruker oppdatert og moderne utstyr i alt vi gjør.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="ic"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="om-oss" className="about">
        <div className="container section-pad about-grid">
          <img src="/assets/om-oss.jpg" alt="Tannhelsepersonell holder en gjennomsiktig tannregulering formet som et hjerte" />
          <div>
            <div className="eyebrow">Om oss</div>
            <h2 className="h2">I hjertet av Langhus</h2>
            <div className="about-body">
              <p>Langhus Tannklinikk befinner seg på baksiden av Langhussenteret i hjertet av Langhus – med gratis parkering for våre besøkende. Vi ønsker både nye og gamle pasienter velkommen til oss.</p>
              <p>Vi setter alltid pasientene i fokus og etterstreber å holde oss oppdatert og opprettholde god kvalitet i alt arbeid vi utfører. Derfor bruker vi tid på å instruere, demonstrere og informere om funn og behandlinger for den enkelte pasient.</p>
              <p>I dag er vi en liten klinikk med tre behandlingsrom med oppdatert og moderne utstyr og materialer.</p>
            </div>
            <div className="about-stats">
              {omStats.map((st, i) => (
                <div className="about-stat" key={i}><div className="n">{st.n}</div><div className="l">{st.l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container section-pad">
          <div className="team-head">
            <div className="eyebrow">Teamet</div>
            <h2 className="h2">Møt menneskene bak smilene</h2>
          </div>
          <div className="team-grid">
            {team.map((m) => {
              const isOpen = !!open['team-' + m.id]
              return (
                <div className="team-card" key={m.id}>
                  <div className="team-photo"><img src={m.img} alt={m.name} /></div>
                  <div className="team-body">
                    <h3>{m.name}</h3>
                    <div className="team-role">{m.role}</div>
                    <p className="team-lead">{m.lead}</p>
                    <div className="team-tags">
                      {m.tags.map((t) => <span className="team-tag" key={t}>{t}</span>)}
                    </div>
                    {isOpen && (
                      <div className="team-bio">
                        {m.bio.map((p, i) => <p key={i}>{p}</p>)}
                      </div>
                    )}
                    <button className="team-toggle" onClick={() => toggle('team-' + m.id)}>
                      {isOpen ? 'Vis mindre' : 'Les mer'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ALIGNERS */}
      <section id="tannregulering" className="aligners">
        <div className="container section-pad">
          <div className="aligners-top">
            <div>
              <div className="eyebrow">Tannregulering</div>
              <h2 className="h2">Rette tennene med Clear Aligners</h2>
              <p className="aligners-intro">Clear Aligners er en moderne metode for tannregulering som bruker en serie gjennomsiktige, avtakbare skinner i stedet for tradisjonelle braketter og tråd.</p>
              <div className="aligners-benefits">
                {inmanBenefits.map((b) => (
                  <div className="aligners-benefit" key={b}><span className="check">✓</span><span>{b}</span></div>
                ))}
              </div>
            </div>
            <img src="/assets/invisalign.jpg" alt="Pasient setter inn en gjennomsiktig clear aligner-skinne" />
          </div>
          <div className="aligners-faq">
            <Accordion items={inman} prefix="inman-" open={open} toggle={toggle} accClass="acc aligners-acc" />
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="priser">
        <div className="prices-wrap">
          <div className="prices-head">
            <div className="eyebrow">Prisliste</div>
            <h2 className="h2">Åpne og forutsigbare priser</h2>
            <p className="lead">Du får alltid et tydelig prisoverslag før vi starter behandlingen.</p>
          </div>

          <div className="price-offer">
            <div>
              <div className="lbl">Tilbud til nye pasienter</div>
              <div className="title">Undersøkelse, rens &amp; bilder</div>
              <div className="sub">Gjelder kun nye pasienter</div>
            </div>
            <div className="right">
              <div className="amount">730<span> kr</span></div>
              <a href="#kontakt" className="btn btn-accent" onClick={openTheForm}>Bestill time</a>
            </div>
          </div>

          <div className="price-groups">
            {priceGroups.map((g) => {
              const isOpen = !!open[g.id]
              return (
                <div className="price-group" key={g.id}>
                  <button className="acc-btn" onClick={() => toggle(g.id)}>
                    <span className="q">{g.group}</span>
                    <span className="sign">{isOpen ? '–' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="price-rows">
                      {g.rows.map((r, i) => (
                        <div className="price-row" key={i}>
                          <span className="name">{r.name}</span>
                          <span className="price">{r.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="price-notes">
            {priceNotes.map((n, i) => (
              <div className="price-note" key={i}><span className="dot"></span>{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section id="tannhelse" className="health">
        <div className="container section-pad">
          <div className="health-head">
            <div className="eyebrow">Råd &amp; informasjon</div>
            <h2 className="h2">Godt å vite om tannhelsen din</h2>
          </div>
          <div className="health-grid">
            <div id="akutt">
              <div className="health-emergency">
                <div>
                  <div className="t">Trenger du akutt hjelp?</div>
                  <div className="s">Ring oss, så hjelper vi deg så raskt vi kan.</div>
                </div>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-accent">{PHONE_DISPLAY}</a>
              </div>
              <div className="health-list">
                <Accordion items={akutt} prefix="akutt-" open={open} toggle={toggle} accClass="health-acc" />
              </div>
            </div>
            <div>
              <div className="health-subtitle">Tannhelse fra A til Å</div>
              <div className="health-list">
                <Accordion items={tannhelse} prefix="th-" open={open} toggle={toggle} accClass="health-acc" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section>
        <div className="container section-pad">
          <div className="reviews-head">
            <div className="eyebrow">Anmeldelser</div>
            <h2 className="h2">Hva pasientene sier</h2>
            <div className="reviews-rating">
              <span className="stars">★★★★★</span>
              <span className="score">5,0 på Google</span>
            </div>
          </div>
          <div style={{ marginTop: 40 }} onMouseEnter={() => setRevPaused(true)} onMouseLeave={() => setRevPaused(false)}>
            <div className="reviews-viewport">
              <div className="reviews-track" style={{ transform: `translateX(-${revIdx * 100 / visible}%)` }}>
                {reviews.map((r, i) => (
                  <div className="review-item" style={{ flex: `0 0 ${100 / visible}%` }} key={i}>
                    <div className="review-card">
                      <Stars cls="stars" />
                      <p className="q">“{r.q}”</p>
                      <div className="who">
                        <div className="name">{r.name}</div>
                        <div className="tag">{r.tag}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reviews-controls">
              <div className="reviews-dots">
                {Array.from({ length: maxRev + 1 }).map((_, i) => (
                  <button
                    key={i}
                    className="review-dot"
                    aria-label="Gå til anmeldelse"
                    onClick={() => setRev(i)}
                    style={{ width: i === revIdx ? 26 : 9, background: i === revIdx ? '#0E7D86' : '#CADDE0' }}
                  ></button>
                ))}
              </div>
              <div className="reviews-arrows">
                <button className="review-arrow" aria-label="Forrige" onClick={() => setRev((s) => Math.max(0, Math.min(s, maxRev) - 1))}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7"></path></svg>
                </button>
                <button className="review-arrow" aria-label="Neste" onClick={() => setRev((s) => Math.min(maxRev, Math.min(s, maxRev) + 1))}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1F3A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="contact">
        <div className="container section-pad">
          <div className="contact-head">
            <div className="eyebrow">Kontakt</div>
            <h2 className="h2">Bestill time hos oss</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-col-info">
              <div className="contact-card">
                <div className="contact-rows">
                  <div className="contact-row">
                    <span className="ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0E7D86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg></span>
                    <div>
                      <div className="label">Adresse</div>
                      <div className="val">Langhussenteret 7, 1405 Langhus<br />Gratis parkering for besøkende</div>
                      <a href="https://maps.app.goo.gl/j1PLMqaMdPSYJ6fC6" target="_blank" rel="noopener" className="maps-btn">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
                        Åpne i Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="contact-row">
                    <span className="ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0E7D86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h3l2 5-2 1.5a11 11 0 0 0 5 5L15 16l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z"></path></svg></span>
                    <div><div className="label">Telefon</div><a href={`tel:${PHONE_TEL}`} className="val-link">{PHONE_DISPLAY}</a></div>
                  </div>
                  <div className="contact-row">
                    <span className="ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0E7D86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M4 7l8 6 8-6"></path></svg></span>
                    <div><div className="label">E-post</div><a href={MAILTO} className="val-link break">{EMAIL}</a></div>
                  </div>
                  <div className="contact-row">
                    <span className="ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0E7D86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 1.8"></path></svg></span>
                    <div><div className="label">Åpningstider</div><div className="val">Man–fre: 08:00–15:45</div></div>
                  </div>
                </div>
                <div className="contact-note">
                  <strong>NB! Avbestilling</strong> må skje pr. telefon eller e-post minimum 24 timer før avtalen. Ikke benyttet time blir belastet. Utenom kontortid ber vi deg kontakte oss via e-post.
                </div>
                <div className="contact-actions">
                  <a href={`tel:${PHONE_TEL}`} className="call">Ring oss</a>
                  <a href={MAILTO} className="mail">Send e-post</a>
                </div>
              </div>
            </div>

            <div className="contact-col-form">
              <div className="form-card">
                {!showForm && !submitted && (
                  <div className="form-intro">
                    <div className="ic"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#0E7D86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"></rect><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3"></path><path d="M8.5 14.5l2.2 2.2 4-4"></path></svg></div>
                    <h3>Bestill time online</h3>
                    <p>Fyll ut et kort skjema med ønsket dag og kontaktinformasjon, så tar vi kontakt for å bekrefte timen.</p>
                    <button className="btn btn-primary" onClick={openTheForm}>Bestill time</button>
                    <div className="alt">Eller ring oss på <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div>
                  </div>
                )}

                {showForm && !submitted && (
                  <form name="timebestilling" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submitForm}>
                    <input type="hidden" name="form-name" value="timebestilling" />
                    <p className="bot-field" aria-hidden="true"><label>Ikke fyll ut dette feltet: <input name="bot-field" /></label></p>
                    <div className="form-required-note">Felt merket <span>*</span> er obligatorisk.</div>
                    <div className="form-section-title">Bestillingsdetaljer</div>

                    <div className="field">
                      <label>Velg ønsket dag<span className="req"> *</span></label>
                      <select name="onsket-dag" required defaultValue="">
                        <option value="" disabled>Velg dag</option>
                        {days.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>

                    <div className="field">
                      <label>Velg ønsket tidsrom<span className="req"> *</span></label>
                      <select name="onsket-tidsrom" required defaultValue="">
                        <option value="" disabled>Velg tidsrom</option>
                        {timeslots.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div className="field wide">
                      <label>Timen gjelder</label>
                      <select name="timen-gjelder" defaultValue={purposes[0]}>
                        {purposes.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    <div className="field wide">
                      <label>Tidligere kunde<span className="req"> *</span></label>
                      <input type="hidden" name="tidligere-kunde" value={kunde || ''} />
                      <div className="kunde-pills">
                        <div className={'kunde-pill' + (kunde === 'Ja' ? ' sel' : '')} onClick={() => setKunde('Ja')}>Ja</div>
                        <div className={'kunde-pill' + (kunde === 'Nei' ? ' sel' : '')} onClick={() => setKunde('Nei')}>Nei</div>
                      </div>
                    </div>

                    <div className="field" style={{ marginBottom: 4 }}>
                      <label>Beskjed</label>
                      <textarea name="beskjed" rows="4" placeholder="Skriv gjerne litt om hva timen gjelder"></textarea>
                    </div>

                    <div className="form-divider"></div>
                    <div className="form-section-title">Kontaktdetaljer</div>

                    <div className="field-grid">
                      <div>
                        <label>Fornavn<span className="req"> *</span></label>
                        <input name="fornavn" required />
                      </div>
                      <div>
                        <label>Etternavn<span className="req"> *</span></label>
                        <input name="etternavn" required />
                      </div>
                    </div>

                    <div className="field">
                      <label>Fødselsdato<span className="req"> *</span></label>
                      <input name="fodselsdato" type="date" required />
                    </div>

                    <div className="field">
                      <label>Adresse</label>
                      <input name="adresse" />
                    </div>

                    <div className="field-grid">
                      <div>
                        <label>Postnummer</label>
                        <input name="postnummer" inputMode="numeric" />
                      </div>
                      <div>
                        <label>Sted</label>
                        <input name="sted" />
                      </div>
                    </div>

                    <div className="field-grid" style={{ marginBottom: 24 }}>
                      <div>
                        <label>E-post<span className="req"> *</span></label>
                        <input name="epost" type="email" required />
                      </div>
                      <div>
                        <label>Telefon<span className="req"> *</span></label>
                        <input name="telefon" type="tel" required />
                      </div>
                    </div>

                    {sendError && <div className="form-error">{sendError}</div>}
                    <button type="submit" className="form-submit" disabled={sending}>
                      {sending ? 'Sender …' : 'Send bestilling'}
                    </button>
                    <p className="form-fineprint">Vi tar kontakt for å bekrefte timen. Avbestilling må skje pr. telefon eller e-post minst 24 timer før avtalen.</p>
                  </form>
                )}

                {submitted && (
                  <div className="form-success">
                    <div className="ic"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#0E7D86" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"></path></svg></div>
                    <h3>Takk for din bestilling!</h3>
                    <p>Vi har mottatt forespørselen din og tar kontakt så snart som mulig for å bekrefte timen. Haster det, ring oss gjerne på <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.</p>
                    <button className="reset" onClick={resetForm}>Send ny bestilling</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/mark-white.png" alt="" />
              <div className="name">LANGHUS<br /><span>Tannklinikk</span></div>
            </div>
            <p>Tannlege på Langhus med fokus på trygg, rolig og smertefri behandling – også for deg som gruer deg.</p>
          </div>
          <div className="footer-col">
            <div className="head">Kontakt</div>
            <div className="list">
              <div>Langhussenteret 7, 1405 Langhus</div>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <a href={MAILTO} className="break">{EMAIL}</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="head">Åpningstider</div>
            <div className="footer-hours">Mandag–fredag<br />08:00–15:45<br /><span>Utenom kontortid: kontakt oss via e-post</span></div>
          </div>
          <div className="footer-col">
            <div className="head">Snarveier</div>
            <div className="list">
              <a href="#tjenester">Tjenester</a>
              <a href="#priser">Priser</a>
              <a href="#tannhelse">Tannhelse</a>
              <a href="https://www.facebook.com/langhustannklinikk" target="_blank" rel="noopener">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 Langhus Tannklinikk · Langhussenteret 7, 1405 Langhus</div>
      </footer>
    </div>
  )
}
