import { useEffect } from 'react';

export default function ModalConfig({
  show,
  onClose,
  fontSize,
  setFontSize,
  darkMode,
  setDarkMode,
}) {
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.className = `${darkMode ? 'dark-theme' : 'light-theme'}`;
  }, [fontSize, darkMode]);

  if (!show) return null;

  return (
    <div
      className="mt-4 ms-4 border shadow p-3 rounded"
      style={{
        zIndex: 20,
        width: '300px',
        maxHeight: 'calc(100vh - 200px)', // evita passar do rodapé
        overflowY: 'auto'
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Acessibilidade</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>

      <div className="mb-3">
        <label className="form-label">Tamanho da fonte:</label>
        <div>
          <button className="btn btn-secondary me-2" onClick={() => setFontSize(prev => Math.max(12, prev - 2))}>A-</button>
          <button className="btn btn-secondary" onClick={() => setFontSize(prev => prev < 22 ? prev + 2 : prev)}>A+</button>
        </div>
      </div>

      <div className="form-check form-switch my-2">
        <input className="form-check-input" type="checkbox" id="darkModeSwitch" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <label className="form-check-label" htmlFor="darkModeSwitch">Modo escuro</label>
      </div>

    </div>
  );
}
