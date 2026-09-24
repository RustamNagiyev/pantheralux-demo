import React, { useState } from 'react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipModal: React.FC<VipModalProps> = ({ isOpen, onClose }) => {
  const [memberCode, setMemberCode] = useState('PANTHERA-VIP-883');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(memberCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0e0e0e]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#201f1f] border border-[#353534] w-full max-w-md rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* VIP Black Metal Card Preview */}
        <div className="p-6 bg-gradient-to-br from-[#1c1b1b] via-[#2a2a2a] to-[#131313] border-b border-[#e4c18d]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#e4c18d]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between mb-8">
            <span className="font-serif text-lg tracking-wider uppercase text-[#e5e2e1]">
              Panthera
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#e4c18d] border border-[#e4c18d]/40 px-2 py-0.5 rounded">
              Club Privé
            </span>
          </div>

          <div className="space-y-1 mb-6">
            <div className="text-[10px] text-[#d2c3c5] uppercase tracking-widest font-mono">
              Üzvlük Kodu
            </div>
            <div className="font-mono text-lg text-[#e5e2e1] tracking-wider flex items-center gap-2">
              <span>{memberCode}</span>
              <button
                onClick={handleCopy}
                className="text-xs text-[#e4c18d] hover:underline"
              >
                {copied ? 'Kopyalandı' : 'Kopyala'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#d2c3c5]/80">
            <span>VIP Qonaq</span>
            <span>Status: Qızıl Atelier</span>
          </div>
        </div>

        {/* Perks List */}
        <div className="p-6 space-y-4">
          <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#e4c18d] font-semibold">
            Club Privé İmtiyazları
          </h4>

          <ul className="space-y-3 text-xs text-[#d2c3c5]">
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d] shrink-0 mt-0.5">
                verified
              </span>
              <span>Hər sifarişdə fərdi qızılı ştampla mühürlənmiş pulsuz xəttatlıq məktubu.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d] shrink-0 mt-0.5">
                schedule
              </span>
              <span>24/7 növbəsiz ekspres çatdırılma və şəxsi florist məsləhətçisi.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-[#e4c18d] shrink-0 mt-0.5">
                local_florist
              </span>
              <span>Məhdud sayda gətirilən nadir Hollandiya pionlarına prioritet rezervasiya.</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3 bg-[#2a2a2a] text-[#e5e2e1] hover:bg-[#353534] font-sans text-[11px] uppercase tracking-wider rounded transition-colors"
            >
              Bağla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
