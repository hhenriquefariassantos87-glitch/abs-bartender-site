import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoFesta: "",
    data: "",
    convidados: "",
    endereco: "",
    cep: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento:\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nTipo de Festa: ${formData.tipoFesta}\nData do Evento: ${formData.data}\nNúmero de Convidados: ${formData.convidados}\nEndereço: ${formData.endereco}\nCEP: ${formData.cep}\nMensagem: ${formData.mensagem}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511982844587?text=${encodedMessage}`, "_blank");
    toast.success("Redirecionando para WhatsApp...");
  };

  const contactInfo = [
    { icon: Phone, label: "Telefone", value: "(11) 98284-4587" },
    { icon: Mail, label: "Email", value: "contato@moustachedrinks.com.br" },
    { icon: MapPin, label: "Localização", value: "São Paulo, SP" },
    { icon: Clock, label: "Horário", value: "Seg-Sex: 9h-18h | Sáb: 9h-14h" },
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solicite seu orçamento sem compromisso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Nome *"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                    <Input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="tel"
                      placeholder="Telefone *"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                    <Select value={formData.tipoFesta} onValueChange={(value) => setFormData({ ...formData, tipoFesta: value })}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Tipo de Festa" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border z-50">
                        <SelectItem value="casamento">Casamento</SelectItem>
                        <SelectItem value="formatura">Formatura</SelectItem>
                        <SelectItem value="festa-aniversario">Festa de Aniversário</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="date"
                      placeholder="Data do evento"
                      value={formData.data}
                      onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                      className="bg-background border-border"
                    />
                    <Input
                      type="number"
                      placeholder="Número de convidados"
                      value={formData.convidados}
                      onChange={(e) => setFormData({ ...formData, convidados: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Endereço do evento"
                      value={formData.endereco}
                      onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                      className="bg-background border-border"
                    />
                    <Input
                      placeholder="CEP"
                      value={formData.cep}
                      onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <Textarea
                    placeholder="Mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="bg-background border-border"
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Solicitar Orçamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <Card key={item.label} className="bg-card border-border">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-accent">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.label}</div>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
