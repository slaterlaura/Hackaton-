import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart, Calendar, Target, BarChart3, ArrowRight } from "lucide-react";

export default function Home() {
  const chartUrls = {
    evolucao_clientes: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/11_evolucao_clientes_novos_80490270.png",
    taxa_recompra: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/01_taxa_recompra_f3231319.png",
    tempo_compras: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/02_tempo_entre_compras_90594e46.png",
    produtos_entrada: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/03_produtos_entrada_c07075a5.png",
    top5_produtos: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/12_top5_produtos_690b7a95.png",
    jornada_produtos: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/04_jornada_produtos_3b08b689.png",
    distribuicao_receita: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/13_distribuicao_faixa_receita_9b6fb252.png",
    segmentacao: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/05_segmentacao_b0e134d9.png",
    ticket_segmento: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/06_ticket_por_segmento_1d77199f.png",
    recompra_canal: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/07_recompra_canal_f002ea6d.png",
    recompra_regiao: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/08_recompra_regiao_dedd4d88.png",
    sazonalidade: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/09_sazonalidade_9d7ff21c.png",
    frequencia: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030797562/6iCaVYJuvmKCRriv7inW9w/10_distribuicao_frequencia_2c523f49.png",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 sm:py-6">
          <div className="flex items-center justify-between flex-wrap gap-y-2">
            <div className="min-w-0 mr-3">
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900 leading-tight" style={{color: '#00473F'}}>Dermage Analytics</h1>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm hidden sm:block">Análise Estratégica de Recompra e Segmentação de Clientes</p>
            </div>
            <div className="flex-shrink-0">
              <Badge className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold whitespace-nowrap" style={{backgroundColor: '#FF8400', color: 'white'}}>Datathon Girls in Tech</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-12">
        {/* Executive Summary */}
        <section className="mb-8 sm:mb-16 pt-4 sm:pt-8">
          <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8" style={{color: '#00473F'}}>Resumo Executivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow" style={{borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5" style={{color: '#FF8400'}} />
                <p className="text-sm font-semibold text-gray-700">Taxa de Recompra</p>
              </div>
              <div className="text-4xl font-bold mb-2" style={{color: '#FF8400'}}>23.49%</div>
              <p className="text-sm text-gray-600">11.073 clientes com recompra</p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow" style={{borderLeftWidth: '4px', borderLeftColor: '#98D2C4'}}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5" style={{color: '#98D2C4'}} />
                <p className="text-sm font-semibold text-gray-700">Tempo Médio</p>
              </div>
              <div className="text-4xl font-bold mb-2" style={{color: '#98D2C4'}}>125 dias</div>
              <p className="text-sm text-gray-600">Entre 1ª e 2ª compra</p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow" style={{borderLeftWidth: '4px', borderLeftColor: '#00473F'}}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5" style={{color: '#00473F'}} />
                <p className="text-sm font-semibold text-gray-700">Clientes Únicos</p>
              </div>
              <div className="text-4xl font-bold mb-2" style={{color: '#00473F'}}>47.133</div>
              <p className="text-sm text-gray-600">Base analisada</p>
            </div>

            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow" style={{borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="w-5 h-5" style={{color: '#FF8400'}} />
                <p className="text-sm font-semibold text-gray-700">Ticket Médio</p>
              </div>
              <div className="text-4xl font-bold mb-2" style={{color: '#FF8400'}}>R$ 224,93</div>
              <p className="text-sm text-gray-600">Valor médio por pedido</p>
            </div>
          </div>
        </section>

        {/* Tabs for Analysis */}
        <Tabs defaultValue="recompra" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-6 sm:mb-8 bg-gray-100 p-1 rounded-lg h-auto">
            <TabsTrigger value="recompra" className="text-xs rounded py-2 data-[state=active]:bg-white data-[state=active]:text-orange-600">Recompra</TabsTrigger>
            <TabsTrigger value="produtos" className="text-xs rounded py-2 data-[state=active]:bg-white data-[state=active]:text-orange-600">Produtos</TabsTrigger>
            <TabsTrigger value="segmentacao" className="text-xs rounded py-2 data-[state=active]:bg-white data-[state=active]:text-orange-600">Segmentação</TabsTrigger>
            <TabsTrigger value="canal" className="text-xs rounded py-2 data-[state=active]:bg-white data-[state=active]:text-orange-600">Canal/Região</TabsTrigger>
            <TabsTrigger value="sazonalidade" className="text-xs rounded py-2 data-[state=active]:bg-white data-[state=active]:text-orange-600">Sazonalidade</TabsTrigger>
            <TabsTrigger value="recomendacoes" className="text-xs rounded py-2 data-[state=active]:bg-white data-[state=active]:text-orange-600">Recomendações</TabsTrigger>
          </TabsList>

          {/* 1. Perfil de Recompra */}
          <TabsContent value="recompra" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-8" style={{borderBottomWidth: '1px', borderBottomColor: '#E5E7EB'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6" style={{color: '#FF8400'}} />
                  <h2 className="text-lg sm:text-2xl font-bold" style={{color: '#00473F'}}>Perfil de Recompra</h2>
                </div>
                <p className="text-gray-600">Qual o percentual de clientes que faz uma segunda compra? Em quanto tempo? Existe um período crítico?</p>
              </div>
              <div className="p-4 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-4" style={{color: '#00473F'}}>Evolução de Clientes Novos</h3>
                  <img src={chartUrls.evolucao_clientes} alt="Evolução de Clientes Novos" className="w-full rounded-lg shadow-md" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img src={chartUrls.taxa_recompra} alt="Taxa de Recompra" className="w-full rounded-lg shadow-md" />
                  </div>
                  <div>
                    <img src={chartUrls.tempo_compras} alt="Tempo entre Compras" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>

                <div className="p-6 rounded-lg" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#98D2C4'}}>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Principais Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Taxa de recompra de 23.49%:</strong> Apenas 1 em 4 clientes retorna para uma segunda compra. Este é o maior desafio da Dermage.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Período crítico: 42-93 dias:</strong> 50% dos clientes que recompram o fazem nos primeiros 93 dias. Após 177 dias, apenas 25% ainda retornam.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Oportunidade de intervenção:</strong> Existe uma janela crítica entre 30-90 dias onde a Dermage pode intervir com campanhas de retenção.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 2. Produto-Porta de Entrada */}
          <TabsContent value="produtos" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-8" style={{borderBottomWidth: '1px', borderBottomColor: '#E5E7EB'}}>
                <div className="flex items-center gap-3 mb-3">
                  <ShoppingCart className="w-6 h-6" style={{color: '#FF8400'}} />
                  <h2 className="text-lg sm:text-2xl font-bold" style={{color: '#00473F'}}>Produto-Porta de Entrada</h2>
                </div>
                <p className="text-gray-600">Quais famílias de produto são mais compradas na primeira compra? Existe uma jornada de produto natural?</p>
              </div>
              <div className="p-4 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-4" style={{color: '#00473F'}}>Top 5 Produtos por Receita</h3>
                  <img src={chartUrls.top5_produtos} alt="Top 5 Produtos" className="w-full rounded-lg shadow-md" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img src={chartUrls.produtos_entrada} alt="Produtos de Entrada" className="w-full rounded-lg shadow-md" />
                  </div>
                  <div>
                    <img src={chartUrls.jornada_produtos} alt="Jornada de Produtos" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>

                <div className="p-6 rounded-lg" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#98D2C4'}}>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Principais Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Protetor solar como porta de entrada:</strong> O protetor solar é o principal produto de aquisição da Dermage, concentrando o maior volume de vendas. Isso o posiciona não apenas como campeão de volume, mas como alavanca estratégica para construir relacionamento com novos clientes.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Jornada de skincare completa:</strong> Após a entrada pelo protetor solar, existe espaço para conduzir o cliente para outras linhas complementares (limpeza, hidratação, anti-idade), aumentando ticket médio e recorrência.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Oportunidade de cross-sell estratégico:</strong> O maior potencial não está apenas em vender mais protetor solar, mas em usar essa compra inicial como gatilho para ativar a próxima compra em categorias complementares.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 3. Segmentação de Clientes */}
          <TabsContent value="segmentacao" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-8" style={{borderBottomWidth: '1px', borderBottomColor: '#E5E7EB'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6" style={{color: '#FF8400'}} />
                  <h2 className="text-lg sm:text-2xl font-bold" style={{color: '#00473F'}}>Segmentação de Clientes</h2>
                </div>
                <p className="text-gray-600">Existem perfis de clientes com comportamentos distintos? Como cada grupo se comporta em termos de ticket, frequência e mix de produtos?</p>
              </div>
              <div className="p-4 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-4" style={{color: '#00473F'}}>Distribuição de Clientes por Faixa de Receita</h3>
                  <img src={chartUrls.distribuicao_receita} alt="Distribuição de Receita" className="w-full rounded-lg shadow-md" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img src={chartUrls.segmentacao} alt="Segmentação de Clientes" className="w-full rounded-lg shadow-md" />
                  </div>
                  <div>
                    <img src={chartUrls.ticket_segmento} alt="Ticket por Segmento" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>

                <div className="p-6 rounded-lg" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#98D2C4'}}>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Principais Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>One-time (76.5%):</strong> Maioria dos clientes compra apenas uma vez. Ticket médio: R$203.44. Este é o segmento crítico para retenção.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Occasional (14.4%):</strong> Clientes com 2 compras. Ticket médio: R$228.50 (+12% vs One-time). Potencial para upgrade.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Regular (7.8%):</strong> Clientes com 3-5 compras. Ticket médio: R$253.28 (+24% vs One-time). Ótimo LTV.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Loyal (1.3%):</strong> Clientes com 6+ compras. Ticket médio: R$288.88 (+42% vs One-time). Núcleo de valor.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 4. Canal e Região */}
          <TabsContent value="canal" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-8" style={{borderBottomWidth: '1px', borderBottomColor: '#E5E7EB'}}>
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-6 h-6" style={{color: '#FF8400'}} />
                  <h2 className="text-lg sm:text-2xl font-bold" style={{color: '#00473F'}}>Canal e Região</h2>
                </div>
                <p className="text-gray-600">Há diferenças de recompra entre canais de venda ou regiões do Brasil?</p>
              </div>
              <div className="p-4 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img src={chartUrls.recompra_canal} alt="Recompra por Canal" className="w-full rounded-lg shadow-md" />
                  </div>
                  <div>
                    <img src={chartUrls.recompra_regiao} alt="Recompra por Região" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>

                <div className="p-6 rounded-lg" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#98D2C4'}}>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Principais Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Marketplace lidera:</strong> 51.13% de recompra vs 21.78% no Fulfillment. Clientes de marketplace são 2.3x mais leais.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Regiões com melhor performance:</strong> RO (57.84%), RJ (55.77%), RR (54.35%), PI (53.78%) e AL (53.52%) lideram em recompra.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Oportunidade regional:</strong> Regiões do Nordeste e Norte têm taxa de recompra mais alta. Estratégia de marketing regional pode ser efetiva.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 5. Sazonalidade */}
          <TabsContent value="sazonalidade" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-8" style={{borderBottomWidth: '1px', borderBottomColor: '#E5E7EB'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6" style={{color: '#FF8400'}} />
                  <h2 className="text-lg sm:text-2xl font-bold" style={{color: '#00473F'}}>Sazonalidade</h2>
                </div>
                <p className="text-gray-600">Existem períodos do ano com mais primeiras compras? E com mais recompras? Como a sazonalidade afeta diferentes famílias de produto?</p>
              </div>
              <div className="p-4 sm:p-8 space-y-6">
                <div>
                  <img src={chartUrls.sazonalidade} alt="Sazonalidade" className="w-full rounded-lg shadow-md" />
                </div>

                <div className="p-6 rounded-lg" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#98D2C4'}}>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Principais Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Protetor solar como motor sazonal:</strong> Novembro (10.491 primeiras compras) é o pico de aquisição, período em que o protetor solar concentra maior volume. Isso indica que campanhas sazonais devem usar essa categoria como âncora de entrada.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Recompra sincronizada com sazonalidade:</strong> Novembro também lidera em recompras (5.515), sugerindo que clientes adquiridos no pico sazonal tendem a retornar. Usar protetor solar como gatilho para campanhas de retenção nesses períodos.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{color: '#FF8400'}}>•</span>
                      <span><strong>Estratégia de timing crítico:</strong> Campanhas de cross-sell devem ser intensificadas 30-90 dias após os picos de aquisição (janeiro-fevereiro e outubro-novembro), quando a taxa de recompra é mais alta.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <img src={chartUrls.frequencia} alt="Distribuição de Frequência" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 6. Recomendações */}
          <TabsContent value="recomendacoes" className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-8" style={{borderBottomWidth: '1px', borderBottomColor: '#E5E7EB'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6" style={{color: '#FF8400'}} />
                  <h2 className="text-lg sm:text-2xl font-bold" style={{color: '#00473F'}}>Recomendações Acionáveis</h2>
                </div>
                <p className="text-gray-600">Com base nos dados, que ações concretas a Dermage deveria tomar para aumentar a recompra?</p>
              </div>
              <div className="p-4 sm:p-8 space-y-6">
                <div className="space-y-4">
                  <div className="p-6 rounded-lg border" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{fontSize: '1.125rem'}}>
                      <span style={{color: '#FF8400', fontWeight: 'bold'}}>1.</span> Protetor Solar como Âncora de Aquisição e Retenção
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Transformar o protetor solar em produto-gateway estratégico, usando-o como entrada para jornadas de cross-sell:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>Campanhas de mídia focadas em protetor solar como porta de entrada</li>
                      <li>Kits de primeira compra: protetor solar + limpeza facial ou hidratação</li>
                      <li>30 dias após compra de protetor solar → Sugerir complementares (anti-idade, clareamento)</li>
                      <li>Landing pages segmentadas por necessidade (proteção solar, anti-envelhecimento, etc.)</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3" style={{color: '#FF8400'}}>Impacto esperado: +20-25% de aumento na taxa de recompra via cross-sell</p>
                  </div>

                  <div className="p-6 rounded-lg border" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{fontSize: '1.125rem'}}>
                      <span style={{color: '#FF8400', fontWeight: 'bold'}}>2.</span> Campanhas de Retenção no Período Crítico (30-90 dias)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Criar uma sequência de e-mails e SMS para clientes que não recompram nos primeiros 90 dias:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li><strong>Dia 30:</strong> E-mail com conteúdo educativo sobre skincare</li>
                      <li><strong>Dia 45:</strong> SMS com cupom de 15% de desconto</li>
                      <li><strong>Dia 60:</strong> E-mail com recomendação personalizada</li>
                      <li><strong>Dia 75:</strong> SMS com oferta urgente (últimas 24h)</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3" style={{color: '#FF8400'}}>Impacto esperado: +10-15% de conversão no período crítico</p>
                  </div>

                  <div className="p-6 rounded-lg border" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{fontSize: '1.125rem'}}>
                      <span style={{color: '#FF8400', fontWeight: 'bold'}}>3.</span> Programa de Fidelização Segmentado
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Criar diferentes estratégias para cada segmento:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li><strong>One-time (76.5%):</strong> Cupom 20% + frete grátis na 2ª compra</li>
                      <li><strong>Occasional (14.4%):</strong> Programa de pontos + acesso a produtos exclusivos</li>
                      <li><strong>Regular (7.8%):</strong> Desconto progressivo + atendimento VIP</li>
                      <li><strong>Loyal (1.3%):</strong> Programa ambassador + produtos em primeira mão</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3" style={{color: '#FF8400'}}>Impacto esperado: +25-30% de aumento no LTV</p>
                  </div>

                  <div className="p-6 rounded-lg border" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{fontSize: '1.125rem'}}>
                      <span style={{color: '#FF8400', fontWeight: 'bold'}}>4.</span> Estratégia Regional Diferenciada
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Regiões com melhor performance (RJ, RO, BA, MG) devem receber investimento diferenciado:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>Aumentar budget de ads em regiões de alta recompra</li>
                      <li>Criar campanhas regionais com influenciadores locais</li>
                      <li>Oferecer frete grátis em regiões de baixa recompra para estimular 2ª compra</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3" style={{color: '#FF8400'}}>Impacto esperado: +5-10% de aumento em regiões críticas</p>
                  </div>

                  <div className="p-6 rounded-lg border" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{fontSize: '1.125rem'}}>
                      <span style={{color: '#FF8400', fontWeight: 'bold'}}>5.</span> Otimização do Canal Fulfillment
                    </h3>
                    <p className="text-gray-700 mb-3">
                      O Fulfillment tem taxa de recompra de apenas 21.78% vs 51.13% no Marketplace. Ações:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>Investigar por que clientes do Fulfillment recompram menos</li>
                      <li>Implementar programa de fidelização específico para este canal</li>
                      <li>Melhorar experiência de compra (checkout, entrega, atendimento)</li>
                      <li>Oferecer incentivos exclusivos para recompra no Fulfillment</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3" style={{color: '#FF8400'}}>Impacto esperado: +15-20% de aumento na recompra do Fulfillment</p>
                  </div>

                  <div className="p-6 rounded-lg border" style={{backgroundColor: '#F0F9F7', borderLeftWidth: '4px', borderLeftColor: '#FF8400'}}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2" style={{fontSize: '1.125rem'}}>
                      <span style={{color: '#FF8400', fontWeight: 'bold'}}>6.</span> Sazonalidade e Planejamento
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Aproveitar picos sazonais e preparar para períodos baixos:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li><strong>Julho-Agosto:</strong> Intensificar campanhas de aquisição</li>
                      <li><strong>Setembro-Outubro:</strong> Focar em retenção de clientes adquiridos</li>
                      <li><strong>Novembro:</strong> Black Friday + recompra de clientes antigos</li>
                      <li><strong>Janeiro-Fevereiro:</strong> Campanhas de retenção pós-festas</li>
                    </ul>
                    <p className="text-sm font-semibold mt-3" style={{color: '#FF8400'}}>Impacto esperado: +20-25% de eficiência em campanhas sazonais</p>
                  </div>
                </div>

                <div className="p-6 rounded-lg mt-8" style={{backgroundColor: '#00473F', color: 'white'}}>
                  <h3 className="font-bold text-lg mb-3">Resumo do Impacto Potencial</h3>
                  <p className="mb-4">
                    Implementando estas 6 recomendações de forma coordenada, a Dermage pode:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>Aumentar taxa de recompra de 23.49% para <strong>35-40%</strong> (+50-70%)</li>
                    <li>Aumentar LTV médio em <strong>+30-40%</strong></li>
                    <li>Reduzir custo de aquisição efetivo em <strong>+25-30%</strong> (via recompra)</li>
                    <li>Melhorar satisfação de clientes através de comunicação personalizada</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>


      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Análise de Dados - Dermage Analytics | Datathon Girls in Tech 2026</p>
        </div>
      </footer>
    </div>
  );
}
