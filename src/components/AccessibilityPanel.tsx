import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Accessibility,
  Sun,
  Moon,
  ZoomIn,
  ZoomOut,
  Contrast,
  Type,
  Eye,
  Focus,
  X,
  Monitor,
} from 'lucide-react';
import { useTheme } from 'next-themes';

const AccessibilityPanel = () => {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Apply font size changes to root element
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply reduced motion preference
    if (reducedMotion) {
      document.documentElement.style.setProperty('--transition-smooth', 'none');
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.style.removeProperty('--transition-smooth');
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [reducedMotion]);

  useEffect(() => {
    // Enhanced focus visibility
    if (focusVisible) {
      document.documentElement.classList.add('enhanced-focus');
    } else {
      document.documentElement.classList.remove('enhanced-focus');
    }
  }, [focusVisible]);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 10, 150));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 10, 80));
  };

  const resetFontSize = () => {
    setFontSize(100);
  };

  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    setReducedMotion(false);
    setFocusVisible(false);
    setTheme('light');
  };

  // Close panel when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-14 w-14 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl rounded-full transition-all duration-200"
        aria-label={isOpen ? "Fechar controles de acessibilidade" : "Abrir controles de acessibilidade"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Accessibility className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-4 z-50 w-80 bg-background border-2 border-border rounded-lg shadow-2xl p-6 max-h-96 overflow-y-auto"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-modal="true"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-primary" />
                <h3 id="accessibility-title" className="font-semibold text-lg">Acessibilidade</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-muted"
                aria-label="Fechar painel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <Separator />

            {/* Theme Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                Tema da Página
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('light')}
                  className="text-xs h-8"
                  aria-pressed={theme === 'light'}
                >
                  <Sun className="h-3 w-3 mr-1" />
                  Claro
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className="text-xs h-8"
                  aria-pressed={theme === 'dark'}
                >
                  <Moon className="h-3 w-3 mr-1" />
                  Escuro
                </Button>
                <Button
                  variant={theme === 'system' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('system')}
                  className="text-xs h-8"
                  aria-pressed={theme === 'system'}
                >
                  <Monitor className="h-3 w-3 mr-1" />
                  Auto
                </Button>
              </div>
            </div>

            <Separator />

            {/* Font Size Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                Tamanho do Texto ({fontSize}%)
              </h4>
              <div className="flex gap-2 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  aria-label={`Diminuir fonte. Tamanho atual: ${fontSize}%`}
                  className="flex-1 h-10"
                >
                  <ZoomOut className="h-3 w-3 mr-1" />
                  A-
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetFontSize}
                  className="flex-1 text-xs h-10"
                  aria-label="Restaurar tamanho padrão da fonte"
                >
                  Padrão
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  aria-label={`Aumentar fonte. Tamanho atual: ${fontSize}%`}
                  className="flex-1 h-10"
                >
                  <ZoomIn className="h-3 w-3 mr-1" />
                  A+
                </Button>
              </div>
            </div>

            <Separator />

            {/* Accessibility Options */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Opções Visuais</h4>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="h-4 w-4" />
                  <span className="text-sm">Alto Contraste</span>
                </div>
                <Switch
                  checked={highContrast}
                  onCheckedChange={setHighContrast}
                  aria-label="Ativar modo de alto contraste para melhor legibilidade"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Focus className="h-4 w-4" />
                  <span className="text-sm">Foco Aprimorado</span>
                </div>
                <Switch
                  checked={focusVisible}
                  onCheckedChange={setFocusVisible}
                  aria-label="Melhorar a visibilidade do foco nos elementos"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Reduzir Animações</span>
                </div>
                <Switch
                  checked={reducedMotion}
                  onCheckedChange={setReducedMotion}
                  aria-label="Reduzir animações e movimento na página"
                />
              </div>
            </div>

            <Separator />

            {/* Reset Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={resetAll}
              className="w-full h-10"
              aria-label="Redefinir todas as configurações de acessibilidade"
            >
              🔄 Redefinir Todas as Configurações
            </Button>

            {/* Keyboard Shortcuts Info */}
            <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-md">
              <p className="font-medium mb-2">💡 Dicas de Navegação:</p>
              <div className="space-y-1">
                <p>• <kbd className="bg-background px-1 py-0.5 rounded">Ctrl</kbd> + <kbd className="bg-background px-1 py-0.5 rounded">+/-</kbd> para zoom</p>
                <p>• <kbd className="bg-background px-1 py-0.5 rounded">Tab</kbd> para navegar</p>
                <p>• <kbd className="bg-background px-1 py-0.5 rounded">Enter</kbd>/<kbd className="bg-background px-1 py-0.5 rounded">Espaço</kbd> para ativar</p>
                <p>• <kbd className="bg-background px-1 py-0.5 rounded">Esc</kbd> para fechar</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityPanel;