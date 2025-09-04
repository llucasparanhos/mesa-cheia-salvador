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
    setTheme('system');
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 h-12 w-12 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl rounded-full"
        aria-label="Abrir controles de acessibilidade"
      >
        <Accessibility className="h-6 w-6 text-white" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-background border-2 border-border rounded-lg shadow-2xl p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Acessibilidade</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
                aria-label="Fechar painel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <Separator />

            {/* Theme Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Sun className="h-4 w-4" />
                Tema
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={theme === 'light' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('light')}
                  className="text-xs"
                >
                  <Sun className="h-3 w-3 mr-1" />
                  Claro
                </Button>
                <Button
                  variant={theme === 'dark' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('dark')}
                  className="text-xs"
                >
                  <Moon className="h-3 w-3 mr-1" />
                  Escuro
                </Button>
                <Button
                  variant={theme === 'system' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTheme('system')}
                  className="text-xs"
                >
                  Auto
                </Button>
              </div>
            </div>

            <Separator />

            {/* Font Size Controls */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                Tamanho da Fonte ({fontSize}%)
              </h4>
              <div className="flex gap-2 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  aria-label="Diminuir fonte"
                  className="flex-1"
                >
                  <ZoomOut className="h-3 w-3 mr-1" />
                  A-
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetFontSize}
                  className="flex-1 text-xs"
                >
                  Normal
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  aria-label="Aumentar fonte"
                  className="flex-1"
                >
                  <ZoomIn className="h-3 w-3 mr-1" />
                  A+
                </Button>
              </div>
            </div>

            <Separator />

            {/* Accessibility Options */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Opções Visuais</h4>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="h-4 w-4" />
                  <span className="text-sm">Alto Contraste</span>
                </div>
                <Switch
                  checked={highContrast}
                  onCheckedChange={setHighContrast}
                  aria-label="Ativar alto contraste"
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
                  aria-label="Ativar foco aprimorado"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Reduzir Movimento</span>
                </div>
                <Switch
                  checked={reducedMotion}
                  onCheckedChange={setReducedMotion}
                  aria-label="Reduzir animações"
                />
              </div>
            </div>

            <Separator />

            {/* Reset Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={resetAll}
              className="w-full"
            >
              Redefinir Tudo
            </Button>

            {/* Keyboard Shortcuts Info */}
            <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded">
              <p className="font-medium mb-1">Atalhos do Teclado:</p>
              <p>• Ctrl + (+/-) para zoom</p>
              <p>• Tab para navegar entre elementos</p>
              <p>• Enter/Espaço para ativar botões</p>
              <p>• Esc para fechar painéis</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityPanel;