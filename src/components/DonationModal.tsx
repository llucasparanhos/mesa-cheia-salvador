import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, CreditCard, QrCode, Share2, Copy, Facebook, Twitter, MessageCircle, User, Crown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ongs } from "@/data/ongs";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ongName?: string;
}

const DonationModal = ({ open, onOpenChange, ongName }: DonationModalProps) => {
  const [selectedOng, setSelectedOng] = useState(ongName || "");
  const [amount, setAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const predefinedAmounts = [10, 25, 50, 100, 250];

  const handleDonate = () => {
    if (!selectedOng) {
      toast.error("Por favor, selecione uma ONG para doar");
      return;
    }
    
    if (!amount && !isMember) {
      toast.error("Por favor, digite um valor para doar");
      return;
    }

    // Simulate payment processing
    const mockTransactionId = Math.random().toString(36).substr(2, 9).toUpperCase();
    setTransactionId(mockTransactionId);
    setShowSuccess(true);
    
    toast.success("Doação realizada com sucesso!");
  };

  const handleClose = () => {
    setSelectedOng(ongName || "");
    setAmount("");
    setIsRecurring(false);
    setIsMember(false);
    setPaymentMethod("credit");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setCardName("");
    setShowSuccess(false);
    setTransactionId("");
    onOpenChange(false);
  };

  const handleShare = (platform: string) => {
    const shareText = isMember 
      ? `Acabei de me tornar membro da ${selectedOng} através da Mesa Cheia! Juntos podemos combater a fome em Salvador. #MesaCheia #DoarFazADiferenca`
      : `Acabei de doar R$ ${amount} para a ${selectedOng} através da Mesa Cheia! Juntos podemos combater a fome em Salvador. #MesaCheia #DoarFazADiferenca`;
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + window.location.href)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  const copyTransactionId = () => {
    navigator.clipboard.writeText(transactionId);
    toast.success("ID da transação copiado!");
  };

  const finalAmount = isMember ? 19.90 : parseFloat(amount) || 0;
  const finalType = isMember ? "Mensalidade de Membro" : (isRecurring ? "Doação Mensal" : "Doação Única");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-primary">
            <Heart className="h-5 w-5 mr-2" />
            {showSuccess ? "Doação Realizada!" : "Fazer Doação"}
          </DialogTitle>
        </DialogHeader>

        {!showSuccess ? (
          <div className="space-y-6">
            {/* ONG Selection */}
            <div className="space-y-2">
              <Label htmlFor="ong-select">Selecionar ONG *</Label>
              <Select value={selectedOng} onValueChange={setSelectedOng} required>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma ONG para doar" />
                </SelectTrigger>
                <SelectContent>
                  {ongs.map((ong) => (
                    <SelectItem key={ong.id} value={ong.name}>
                      <div className="flex items-center">
                        <span>{ong.name}</span>
                        {ong.featured && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Destaque
                          </Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Membership Option */}
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="member" 
                    checked={isMember}
                    onCheckedChange={(checked) => {
                      setIsMember(checked as boolean);
                      if (checked) {
                        setIsRecurring(false);
                        setAmount("");
                      }
                    }}
                  />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center">
                      <Crown className="h-4 w-4 mr-1 text-primary" />
                      <Label htmlFor="member" className="font-semibold text-primary cursor-pointer">
                        Tornar-se Membro
                      </Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Contribua mensalmente com R$ 19,90 e receba relatórios exclusivos sobre o impacto das suas doações
                    </p>
                    <div className="text-xs text-primary font-medium">
                      • Transparência total • Relatórios mensais • Benefícios exclusivos
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amount Selection */}
            {!isMember && (
              <div className="space-y-4">
                <Label>Valor da Doação</Label>
                <div className="grid grid-cols-3 gap-2">
                  {predefinedAmounts.map((value) => (
                    <Button
                      key={value}
                      variant={amount === value.toString() ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAmount(value.toString())}
                      className="h-12"
                    >
                      R$ {value}
                    </Button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="custom-amount">Valor personalizado</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Digite um valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Recurring Donation */}
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="recurring" 
                    checked={isRecurring}
                    onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                  />
                  <Label htmlFor="recurring" className="text-sm cursor-pointer">
                    Quero fazer uma doação mensal (você pode cancelar a qualquer momento)
                  </Label>
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="space-y-4">
              <Label>Método de Pagamento</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit" className="flex items-center cursor-pointer">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Cartão de Crédito
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex items-center cursor-pointer">
                    <QrCode className="h-4 w-4 mr-2" />
                    PIX
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Details */}
            {paymentMethod === "credit" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="card-name">Nome no Cartão</Label>
                  <Input
                    id="card-name"
                    placeholder="João da Silva"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="card-number">Número do Cartão</Label>
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Validade</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/AA"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "pix" && (
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <QrCode className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Após confirmar, você receberá o código PIX para pagamento
                </p>
              </div>
            )}

            {/* Summary */}
            {(selectedOng && (finalAmount > 0)) && (
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Resumo da Doação</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>ONG:</span>
                      <span className="font-medium">{selectedOng}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tipo:</span>
                      <span className="font-medium">{finalType}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-primary">
                      <span>Total:</span>
                      <span>R$ {finalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Donate Button */}
            <Button 
              onClick={handleDonate} 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
              size="lg"
              disabled={!selectedOng || (!isMember && !amount)}
            >
              <Heart className="h-4 w-4 mr-2" />
              {isMember ? "Tornar-se Membro" : `Doar R$ ${finalAmount.toFixed(2)}`}
            </Button>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center">
              <Heart className="h-10 w-10 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {isMember ? "Bem-vindo como membro!" : "Obrigado pela sua doação!"}
              </h3>
              <p className="text-muted-foreground">
                {isMember 
                  ? "Você agora é um membro oficial e receberá relatórios mensais sobre o impacto das suas contribuições."
                  : "Sua generosidade fará a diferença na vida de muitas famílias."
                }
              </p>
            </div>

            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3">Comprovante de Doação</h4>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex justify-between">
                    <span>ONG:</span>
                    <span className="font-medium">{selectedOng}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tipo:</span>
                    <span className="font-medium">{finalType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valor:</span>
                    <span className="font-medium text-primary">R$ {finalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID da Transação:</span>
                    <div className="flex items-center">
                      <span className="font-mono text-xs mr-2">{transactionId}</span>
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
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Compartilhe sua boa ação:</p>
              <div className="flex justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="flex items-center"
                >
                  <Facebook className="h-4 w-4 mr-1" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="flex items-center"
                >
                  <Twitter className="h-4 w-4 mr-1" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <Button onClick={handleClose} variant="outline" className="w-full">
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;