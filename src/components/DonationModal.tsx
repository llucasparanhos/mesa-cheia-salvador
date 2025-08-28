import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, CreditCard, Shield, CheckCircle, Share2, Copy, Facebook, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ongName?: string;
}

const DonationModal = ({ open, onOpenChange, ongName }: DonationModalProps) => {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [donationData, setDonationData] = useState<{
    amount: string;
    isRecurring: boolean;
    transactionId: string;
    date: string;
  } | null>(null);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const predefinedAmounts = ["10", "25", "50", "100"];

  const handleDonate = () => {
    const finalAmount = amount === "custom" ? customAmount : amount;
    
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      toast({
        title: "Valor inválido",
        description: "Por favor, insira um valor válido para sua doação.",
        variant: "destructive",
      });
      return;
    }

    if (!paymentMethod) {
      toast({
        title: "Método de pagamento não selecionado",
        description: "Por favor, selecione um método de pagamento.",
        variant: "destructive",
      });
      return;
    }

    // Simular processamento de pagamento
    toast({
      title: "Processando doação...",
      description: `Redirecionando para pagamento de R$ ${finalAmount}${isRecurring ? '/mês' : ''}`,
    });

    // Simular redirecionamento para gateway de pagamento
    setTimeout(() => {
      const transactionId = `TX${Date.now()}`;
      const date = new Date().toLocaleString('pt-BR');
      
      setDonationData({
        amount: finalAmount,
        isRecurring,
        transactionId,
        date
      });
      setShowSuccess(true);
    }, 2000);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setDonationData(null);
    onOpenChange(false);
  };

  const handleShare = (platform: string) => {
    const message = `Acabei de fazer parte da corrente do bem! Doei para combater a fome em Salvador através da Mesa Cheia. Junte-se a nós! #MesaCheia #FomeZero`;
    const url = window.location.href;
    
    let shareUrl = '';
    
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const copyTransactionId = () => {
    if (donationData) {
      navigator.clipboard.writeText(donationData.transactionId);
      toast({
        title: "Copiado!",
        description: "ID da transação copiado para a área de transferência.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            {showSuccess ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-500" />
                Doação Realizada
              </>
            ) : (
              <>
                <Heart className="h-5 w-5 text-primary" />
                Fazer Doação
                {ongName && <span className="text-base text-muted-foreground">para {ongName}</span>}
              </>
            )}
          </DialogTitle>
        </DialogHeader>

        {!showSuccess ? (
          <div className="space-y-6">
            {/* Valor da Doação */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Valor da doação</Label>
              <RadioGroup
                value={amount}
                onValueChange={setAmount}
                className="grid grid-cols-2 gap-3"
              >
                {predefinedAmounts.map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem value={value} id={value} />
                    <Label
                      htmlFor={value}
                      className="flex-1 flex items-center justify-center p-3 border rounded-lg cursor-pointer hover:bg-muted/50"
                    >
                      R$ {value}
                    </Label>
                  </div>
                ))}
                <div className="flex items-center space-x-2 col-span-2">
                  <RadioGroupItem value="custom" id="custom" />
                  <div className="flex-1 flex items-center gap-2">
                    <Label htmlFor="custom">R$</Label>
                    <Input
                      type="number"
                      placeholder="Valor personalizado"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="flex-1"
                      min="1"
                    />
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Doação Recorrente */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="recurring"
                checked={isRecurring}
                onCheckedChange={(checked) => setIsRecurring(checked === true)}
              />
              <Label htmlFor="recurring" className="text-sm">
                Tornar esta uma doação mensal recorrente
              </Label>
            </div>

            {/* Método de Pagamento */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Método de pagamento</Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Cartão de Crédito
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    PIX
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Campos do PIX */}
            {paymentMethod === "pix" && (
              <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold text-sm">Dados para PIX</h4>
                <div className="text-center space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="w-32 h-32 bg-gray-100 mx-auto rounded-lg flex items-center justify-center mb-3">
                      <div className="text-xs text-center">
                        <div className="w-24 h-24 bg-black/10 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                          QR CODE
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Escaneie o QR Code com seu app do banco
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold mb-2">Ou use a chave PIX:</p>
                    <div className="bg-gray-50 p-3 rounded border">
                      <code className="text-sm">pix@mesacheia.org.br</code>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Copie e cole no seu app de pagamento
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Campos do Cartão de Crédito */}
            {paymentMethod === "credit-card" && (
              <div className="space-y-4 p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold text-sm">Dados do Cartão</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <Label htmlFor="card-number" className="text-xs">Número do Cartão</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.number}
                      onChange={(e) => setCardData({...cardData, number: e.target.value})}
                      maxLength={19}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="card-name" className="text-xs">Nome no Cartão</Label>
                    <Input
                      id="card-name"
                      placeholder="Nome como está no cartão"
                      value={cardData.name}
                      onChange={(e) => setCardData({...cardData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="card-expiry" className="text-xs">Validade</Label>
                    <Input
                      id="card-expiry"
                      placeholder="MM/AA"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="card-cvv" className="text-xs">CVV</Label>
                    <Input
                      id="card-cvv"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Resumo */}
            <div className="bg-muted/30 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span>Valor:</span>
                <span className="font-semibold">
                  R$ {amount === "custom" ? customAmount || "0" : amount}
                </span>
              </div>
              {isRecurring && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Frequência:</span>
                  <span>Mensal</span>
                </div>
              )}
              {paymentMethod && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Método:</span>
                  <span>
                    {paymentMethod === "credit-card" ? "Cartão de Crédito" : "PIX"}
                  </span>
                </div>
              )}
            </div>

            {/* Botão de Doação */}
            <Button
              onClick={handleDonate}
              variant="hero"
              size="lg"
              className="w-full"
            >
              <Heart className="h-4 w-4 mr-2" />
              Doar R$ {amount === "custom" ? customAmount || "0" : amount}
              {isRecurring && "/mês"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              <Shield className="h-3 w-3 inline mr-1" />
              Pagamento 100% seguro e protegido
            </p>
          </div>
        ) : (
          /* Tela de Sucesso */
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Muito obrigado por fazer parte dessa corrente!
                </h3>
                <p className="text-muted-foreground">
                  Sua doação está fazendo a diferença na vida de famílias em Salvador
                </p>
              </div>
            </div>

            {/* Recibo */}
            {donationData && (
              <div className="bg-muted/30 p-6 rounded-lg space-y-4 text-left">
                <h4 className="font-semibold text-center mb-4">Recibo de Doação</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor:</span>
                    <span className="font-semibold">
                      R$ {donationData.amount}{donationData.isRecurring && '/mês'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span>{donationData.date}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ID da Transação:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono">{donationData.transactionId}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyTransactionId}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  {ongName && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Destinatário:</span>
                      <span>{ongName}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-green-600 font-semibold">✓ Confirmado</span>
                  </div>
                </div>
              </div>
            )}

            {/* Compartilhamento */}
            <div className="space-y-4">
              <h4 className="font-semibold">Compartilhe sua boa ação!</h4>
              <div className="flex justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <Button
              onClick={handleClose}
              variant="hero"
              size="lg"
              className="w-full"
            >
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;