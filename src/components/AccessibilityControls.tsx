import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
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
} from 'lucide-react';
import { useTheme } from 'next-themes';

const AccessibilityControls = () => {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

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
    setScreenReader(false);
    setFocusVisible(false);
    setTheme('system');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-10 px-3 bg-background border-2 border-primary/20 hover:bg-primary/10"
          aria-label="Controles de Acessibilidade"
        >
          <Accessibility className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Acessibilidade</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Accessibility className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-sm">Acessibilidade</h3>
          </div>
          
          <Separator />

          {/* Theme Controls */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Sun className="h-4 w-4" />
              Tema
            </h4>
            <div className="flex gap-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
                className="flex-1"
              >
                <Sun className="h-4 w-4 mr-1" />
                Claro
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
                className="flex-1"
              >
                <Moon className="h-4 w-4 mr-1" />
                Escuro
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
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetFontSize}
                className="flex-1"
              >
                Padrão
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={fontSize >= 150}
                aria-label="Aumentar fonte"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Accessibility Options */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Opções de Acessibilidade</h4>
            
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
                <span className="text-sm">Reduzir Animações</span>
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
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Atalhos:</strong></p>
            <p>• Ctrl + (+/-) para zoom</p>
            <p>• Tab para navegar</p>
            <p>• Enter/Espaço para ativar</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityControls;