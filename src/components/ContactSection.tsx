import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    mensagem: '',
    tipoAtendimento: 'geral'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedContactType, setSelectedContactType] = useState<'call' | 'whatsapp' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const enviarWebhook = async (tipo: 'call' | 'whatsapp') => {
    const { nome, empresa, telefone: telefoneInput, mensagem, tipoAtendimento } = formData;
    
    // Validação básica
    if (!nome.trim() || !empresa.trim() || !telefoneInput.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Validação específica para WhatsApp
    if (tipo === 'whatsapp' && !mensagem.trim()) {
      alert('Por favor, descreva sua necessidade para o atendimento via WhatsApp.');
      return;
    }

    setIsSubmitting(true);

    // Remove caracteres não numéricos
    let telefone = telefoneInput.replace(/\D/g, '');

    // Se tiver 10 dígitos, adiciona 9 após o DDD para padronizar para celular
    if (telefone.length === 10) {
      telefone = telefone.slice(0, 2) + "9" + telefone.slice(2);
    }

    if (telefone.length !== 11) {
      alert("Por favor, insira um número de telefone válido com DDD.");
      setIsSubmitting(false);
      return;
    }

    // Adiciona +55 na frente
    telefone = "+55" + telefone;

    // Payload base
    let payload: any = { 
      nome: nome.trim(), 
      empresa: empresa.trim(), 
      telefone 
    };
    
    // Payload para o fluxo alternativo
    if (tipo === 'whatsapp') {
      payload = {
        body: {
          text: {
            message: `🌐 *Novo contato do site*\n\n👤 *Nome:* ${nome.trim()}\n🏢 *Empresa:* ${empresa.trim()}\n📱 *Telefone:* ${telefone}\n📋 *Tipo:* ${tipoAtendimento}\n\n💬 *Mensagem:*\n${mensagem.trim()}`
          },
          phone: telefone,
          senderName: nome.trim(),
          isEdit: false,
          isGroup: false,
          isNewsletter: false,
          fromApi: false
        }
      };
    }

    let urls: string[] = [];
    if (tipo === "call") {
      urls = [
        "https://n8n.gonsolutions.site/webhook-test/sdrdemo",
        "https://n8n.gonsolutions.site/webhook/sdrdemo"
      ];
    } else {
      urls = [
        "https://n8n.gonsolutions.site/webhook/site",
        "https://n8n.gonsolutions.site/webhook-test/site"
      ];
    }

    try {
      // Log detalhado do payload para debug
      console.log('🚀 Payload enviado:', JSON.stringify(payload, null, 2));
      console.log('📡 URLs de destino:', urls);
      console.log('📋 Dados do formulário:', { nome, empresa, telefone, mensagem, tipoAtendimento });
      console.log('🔍 Estrutura body:', payload.body || 'Sem body');
      console.log('📝 Content:', payload.body?.content || 'Sem content');
      
      // Envia para os webhooks reais
       const results = [];
       for (const url of urls) {
         try {
           const response = await fetch(url, {
             method: "POST",
             headers: { 
               "Content-Type": "application/json",
               "Accept": "application/json"
             },
             body: JSON.stringify(payload),
             mode: 'cors'
           });
           
           if (!response.ok) {
             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
           }
           
           results.push({ url, success: true });
         } catch (urlError) {
           console.error(`Erro ao enviar para ${url}:`, urlError);
           results.push({ url, success: false, error: urlError });
         }
       }
       
       const successCount = results.filter(r => r.success).length;
       if (successCount > 0) {
         alert("✅ Dados enviados com sucesso!");
       } else {
         throw new Error('Falha ao enviar para todos os webhooks');
       }
       
       setFormData({ nome: '', empresa: '', telefone: '', mensagem: '', tipoAtendimento: 'geral' });
       setSelectedContactType(null);
    } catch (error) {
      console.error("Erro ao enviar webhook:", error);
      alert(`❌ Erro ao enviar dados.\n\nDetalhes: ${error instanceof Error ? error.message : 'Erro desconhecido'}\n\nTente novamente ou entre em contato por email: contato@gonsolutions.com.br`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-green-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar seus processos? Escolha como prefere conversar conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-green-900/50 rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Vamos conversar</h3>
              <p className="text-gray-300 mb-8">
                Nossa equipe está pronta para entender suas necessidades e criar a solução 
                perfeita para seu negócio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ligação direta</div>
                    <div className="text-gray-300">Receba uma ligação em instantes</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-gray-300">Converse no seu ritmo</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telefone</div>
                    <div className="text-gray-300">(47) 99232-2081</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">contato@gonsolutions.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-green-400 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Localização</div>
                    <div className="text-gray-300">Blumenau/SC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Como prefere ser contatado?</h3>
              <p className="text-gray-300 text-sm">Escolha a forma de contato e preencha as informações</p>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Nome da empresa"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(62) 999999999"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                />
              </div>



              <div className="space-y-4">
                {!selectedContactType ? (
                  <>
                    <div className="text-center mb-4">
                      <p className="text-gray-300 text-sm">Escolha como prefere ser contatado:</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedContactType('call')}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>📞 Receber uma ligação</span>
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-800 text-gray-400">ou</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const whatsappNumber = '5547992322081';
                        const message = encodeURIComponent('Olá! Gostaria de falar sobre os serviços da GON Solutions.');
                        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>💬 Falar no WhatsApp</span>
                    </button>
                   </>
                 ) : (
                   <>
                     <div className="flex items-center justify-between mb-4">
                       <p className="text-gray-300 text-sm">
                         Contato via: <span className="text-green-400 font-semibold">
                           📞 Ligação
                         </span>
                       </p>
                       <button
                         type="button"
                         onClick={() => {
                           setSelectedContactType(null);
                           setFormData(prev => ({ ...prev, mensagem: '', tipoAtendimento: 'geral' }));
                         }}
                         className="text-gray-400 hover:text-white text-sm underline"
                       >
                         Alterar
                       </button>
                     </div>
                     
                     <button
                       type="button"
                       onClick={() => enviarWebhook('call')}
                       disabled={isSubmitting}
                       className="w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 text-white hover:shadow-purple-500/25"
                     >
                       <Phone className="h-5 w-5" />
                       <span>{isSubmitting ? 'Enviando...' : '📞 Solicitar ligação'}</span>
                     </button>
                   </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;