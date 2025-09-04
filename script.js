// Animações de Scroll para Machain

// Sistema de Tradução
const translations = {
    'pt': {
        // Navegação
        'cta-main': 'CONHEÇA A MACHAIN',
        
        // Hero Section
        'hero-title-highlight': 'TOKENIZAÇÃO',
        'hero-title-main': 'DE ATIVOS REAIS',
        'hero-title-sub': 'COM EXECUÇÃO DE',
        'hero-title-sub2': 'PONTA A PONTA',
        'hero-subtitle': 'Do ativo físico ao token validado —  com segurança jurídica, operação contínua e transparência na blockchain focada na soberania de dados e identidade, que utiliza IA avançada para agregação e análise de dados.',
        'cta-presentation': '> AGENDE SUA APRESENTAÇÃO EXECUTIVA',
        'cta-presentation-2': '> AGENDE SUA APRESENTAÇÃO EXECUTIVA',
        'cta-presentation-3': '> AGENDE SUA APRESENTAÇÃO EXECUTIVA',
        
        // Seção 2
        'section2-title-highlight': 'POR QUE',
        'section2-title-main': 'TOKENIZAR AGORA?',
        'section2-subtitle1-line1': 'O MERCADO MUDOU.',
        'section2-subtitle1-line2': 'QUEM NÃO SE ADAPTA, FICA PARA TRÁS.',
        'section2-subtitle': 'A tokenização não é tendência — é realidade operacional. Grandes gestoras globais já movimentam bilhões em RWAs tokenizados, criando liquidez desde a captação de recursos, estruturação de operações ou simplesmente possibilitando a movimentação de ativos e direitos a eles correspondentes.',
        'card-brasil-desc': 'VALOR MOVIMENTADO NO BRASIL <br> SETOR IMOBILIÁRIO EM 2024',
        'card-brasil-value': 'R$ 229 BILHÕES',
        'card-global-desc': 'O VALOR GLOBAL DO MERCADO IMOBILIÁRIO REGISTRADO EM RWA',
        'card-global-value': 'US$ 11 TRILHÕES',
        
        // Seção 3
        'section3-title-part1': 'NÃO ENTREGAMOS APENAS',
        'section3-title-highlight1': 'TECNOLOGIA.',
        'section3-title-highlight2': 'ENTREGAMOS',
        'section3-title-highlight3': 'OPERAÇÃO COMPLETA',
        'section3-description': 'Nós estruturamos cada tokenização como um produto real, chancelado pelo direito brasileiro e internacional,com todos os componentes necessários para operação profissional de ponta a ponta.',
        'result-label': 'Resultado:',
        'result-text': 'Um produto estruturado, não um experimento tecnológico.',
        
        // Seção 4
        'section4-title-highlight': 'TOKENIZAÇÃO IMOBILIÁRIA',
        'section4-title-light': 'A NOVA ERA DA INCORPORAÇÃO',
        'section4-description': 'A tokenização imobiliária chegou para otimizar estruturas, criar liquidez e profissionalizar operações. Incorporadores visionários já utilizam essa tecnologia para transformar a forma como empreendimentos são estruturados e comercializados.',
        
        // Seção 5
        'section5-title-bold': 'COMO EXECUTAMOS NA',
        'section5-title-light': 'PRÁTICA:',
        'process-card1-title': 'DUE DILIGENCE PROFUNDA',
        'process-card1-desc': 'Avaliação de elegibilidade, análise de riscos e viabilidade econômica. Apenas ativos com fundamentos sólidos prosseguem.',
        'process-card2-title': 'ENGENHARIA DO TOKEN',
        'process-card2-desc': 'Design personalizado de smart contracts, definição de direitos, regras de distribuição e mecanismos de governança.',
        'process-card3-title': 'ONBOARDING QUALIFICADO',
        'process-card3-desc': 'KYC/AML robusto, análise de suitability e documentação de investidores dentro dos mais altos padrões regulatórios.',
        'process-card4-title': 'ARQUITETURA JURÍDICA',
        'process-card4-desc': 'Estruturação de veículos, garantias e documentação legal completa. Cada token representa direitos econômicos claros e executáveis.',
        'process-card5-title': 'EMISSÃO CONTROLADA',
        'process-card5-desc': 'Deploy em blockchain enterprise, testes de segurança e validação técnica completa antes do go-live.',
        'process-card6-title': 'OPERAÇÃO PERMANENTE',
        'process-card6-desc': 'Gestão contínua, relatórios periódicos, distribuição de rendimentos e suporte a holders.',
        
        // Seção 6
        'section6-title-main': 'A ESTRUTURA QUE TRANSFORMA',
        'section6-title-highlight': 'ATIVOS EM TOKENS',
        'benefit1-title': 'LIQUIDEZ IMEDIATA:',
        'benefit1-desc': 'Fracionamento inteligente e negociação 24/7',
        'benefit2-title': 'CUSTO REDUZIDO:',
        'benefit2-desc': 'Menos intermediários, processos automatizados',
        'benefit3-title': 'ALCANCE GLOBAL:',
        'benefit3-desc': 'Investidores qualificados de qualquer jurisdição',
        'benefit4-title': 'TRANSPARÊNCIA TOTAL:',
        'benefit4-desc': 'Cada transação auditável em tempo real',
        'benefit5-title': 'ADEQUAÇÃO AO MERCADO TRADICIONAL:',
        'benefit5-desc': 'Tokenização integrada ao modelo clássico, com segurança jurídica.',
        
        // Dashboard
        'dashboard-title': 'Dashboard',
        'dashboard-new-emission': 'Nova emissão',
        'dashboard-total-value': 'Valor total tokenizado',
        'dashboard-total-subtitle': 'USD 24.000.000 | 100% do portfólio',
        'dashboard-assets-title': 'Ativos Tokenizados',
        'dashboard-assets-value': '12 ativos',
        'dashboard-assets-subtitle': 'Imóveis, recebíveis, arte, luxo',
        'dashboard-investors-title': 'Investidores Ativos',
        'dashboard-investors-subtitle': '320 participações fracionadas',
        'dashboard-projects-title': 'Projetos/Empreendimentos',
        'dashboard-projects-value': '5 em andamento',
        'dashboard-projects-subtitle': '2 em captação | 3 concluídos',
        'dashboard-quick-access': 'Acesso rápido',
        'dashboard-access-investors': 'Investidores',
        'dashboard-access-assets': 'Ativos',
        'dashboard-access-projects': 'Projetos',
        'dashboard-access-compliance': 'Compliance',
        
        // Seção 7
        'section7-title-main': 'PARA QUEM É A',
        'section7-title-highlight': 'TOKENIZAÇÃO?',
        'section7-subtitle': 'Esses exemplos ilustram como diferentes setores podem acessar novos fluxos de capital, investidores e eficiência.',
        'audience-construtoras': '/ CONSTRUTORAS',
        'audience-what-we-offer': 'O QUE OFERECEMOS:',
        'audience-construtoras-desc': 'Tokenização de unidades imobiliárias em construção, permitindo venda fracionada antecipada e captação de recursos.',
        'audience-learn-more': 'Saiba mais.',
        'audience-incorporadoras': '/ INCORPORADORAS',
        'audience-what-we-offer-2': 'O QUE OFERECEMOS:',
        'audience-incorporadoras-desc': 'Estruturação de SPEs tokenizadas, com participação digital em empreendimentos e distribuição de resultados aos investidores.',
        'audience-learn-more-2': 'Saiba mais.',
        'audience-gestoras': '/ GESTORAS DE FUNDOS',
        'audience-what-we-offer-3': 'O QUE OFERECEMOS:',
        'audience-gestoras-desc': 'Criação de fundos imobiliários tokenizados e recebíveis estruturados, ampliando liquidez e base de investidores.',
        'audience-learn-more-3': 'Saiba mais.',
        'audience-proprietarios': '/ PROPRIETÁRIOS<br>DE IMÓVEIS',
        'audience-what-we-offer-4': 'O QUE OFERECEMOS:',
        'audience-proprietarios-desc': 'Tokenização de imóveis de alto valor ou patrimônio físico (terrenos, prédios, galpões), ou mercado de luxo, para acesso a liquidez sem venda integral.',
        'audience-learn-more-4': 'Saiba mais.',
        'audience-family-offices': '/ FAMILY OFFICES',
        'audience-what-we-offer-5': 'O QUE OFERECEMOS:',
        'audience-family-offices-desc': 'Veículos tokenizados para gestão e diversificação patrimonial, com foco em imóveis, recebíveis e ativos alternativos.',
        'audience-learn-more-5': 'Saiba mais.',
        'audience-proprietarios-ativos': '/ PROPRIETÁRIOS DE<br>ATIVOS E DIREITOS',
        'audience-what-we-offer-6': 'O QUE OFERECEMOS:',
        'audience-proprietarios-ativos-desc': 'Tokenização de obras de arte, joias, carros e artigos exclusivos, com registro de procedência e possibilidade de fracionamento.',
        'audience-learn-more-6': 'Saiba mais.',
        
        // Seção 8
        'section8-title-bold': 'GOVERNANÇA & COMPLIANCE:',
        'section8-title-light': 'POR QUE ISSO IMPORTA?',
        'section8-description': 'Tokenização sem compliance é especulação. Investidores sofisticados exigem governança profissional.',
        'result-label-2': 'Resultado:',
        'result-text-2': 'Cada token tem lastro verificável e conformidade regulatória integral.',
        'governance-estruturas-title': 'ESTRUTURAS JURÍDICAS',
        'governance-estruturas-desc': 'conforme legislações brasileiras e internacionais.',
        'governance-kyc-title': 'KYC/AML COMPLETO',
        'governance-kyc-desc': 'com verificação de origem de recursos.',
        'governance-auditoria-title': 'AUDITORIA CONTÍNUA',
        'governance-auditoria-desc': 'com relatórios transparentes.',
        'governance-protecao-title': 'PROTEÇÃO DE DADOS',
        'governance-protecao-desc': 'conforme LGPD.',
        
        // Seção 9
        'partnership-title': 'PARCEIRO OFICIAL',
        'partnership-description': 'Matchain é a infraestrutura de tokenização e identidade digital para o Web3, unindo ativos reais, dados e inteligência artificial em um ecossistema seguro e global.',
        
        // Seção 10
        'cta-title': 'O MOMENTO É AGORA',
        'cta-subtitle': 'Seus ativos merecem a liquidez que apenas a tokenização pode oferecer.',
        'cta-description': 'Grandes gestoras já movimentam bilhões em RWAs tokenizados. O mercado está formado, a regulamentação está clara, a tecnologia está madura.',
        'next-title': 'SEJA O PRÓXIMO.',
        'cta-specialist': '> FALE COM NOSSO ESPECIALISTA EM RWA',
        
        // Footer
        'footer-sites': 'SITES',
        'footer-socials': 'SOCIALS',
        'footer-legal': 'LEGAL',
        'footer-terms': 'Terms of use',
        'footer-disclaimer': 'Disclaimer',
        'footer-rights': 'All Rights Reserved',
        'footer-copyright': '© 2024 Matchain'
    },
    'en': {
        // Navigation
        'cta-main': 'DISCOVER MACHAIN',
        
        // Hero Section
        'hero-title-highlight': 'TOKENIZATION',
        'hero-title-main': 'OF REAL ASSETS',
        'hero-title-sub': 'WITH END-TO-END',
        'hero-title-sub2': 'EXECUTION',
        'hero-subtitle': 'From physical asset to validated token — with legal security, continuous operation and transparency on the blockchain focused on data sovereignty and identity, using advanced AI for data aggregation and analysis.',
        'cta-presentation': '> SCHEDULE YOUR EXECUTIVE PRESENTATION',
        'cta-presentation-2': '> SCHEDULE YOUR EXECUTIVE PRESENTATION',
        'cta-presentation-3': '> SCHEDULE YOUR EXECUTIVE PRESENTATION',
        
        // Section 2
        'section2-title-highlight': 'WHY',
        'section2-title-main': 'TOKENIZE NOW?',
        'section2-subtitle1-line1': 'THE MARKET HAS CHANGED.',
        'section2-subtitle1-line2': 'THOSE WHO DON\'T ADAPT, GET LEFT BEHIND.',
        'section2-subtitle': 'Tokenization is not a trend — it\'s operational reality. Large global asset managers are already moving billions in tokenized RWAs, creating liquidity from fundraising, structuring operations or simply enabling the movement of assets and their corresponding rights.',
        'card-brasil-desc': 'VALUE MOVED IN BRAZIL <br> REAL ESTATE SECTOR IN 2024',
        'card-brasil-value': 'R$ 229 BILLION',
        'card-global-desc': 'THE GLOBAL VALUE OF THE REAL ESTATE MARKET REGISTERED IN RWA',
        'card-global-value': 'US$ 11 TRILLION',
        
        // Section 3
        'section3-title-part1': 'WE DON\'T JUST DELIVER',
        'section3-title-highlight1': 'TECHNOLOGY.',
        'section3-title-highlight2': 'WE DELIVER',
        'section3-title-highlight3': 'COMPLETE OPERATION',
        'section3-description': 'We structure each tokenization as a real product, endorsed by Brazilian and international law, with all the necessary components for professional end-to-end operation.',
        'result-label': 'Result:',
        'result-text': 'A structured product, not a technological experiment.',
        
        // Section 4
        'section4-title-highlight': 'REAL ESTATE TOKENIZATION',
        'section4-title-light': 'THE NEW ERA OF DEVELOPMENT',
        'section4-description': 'Real estate tokenization has arrived to optimize structures, create liquidity and professionalize operations. Visionary developers are already using this technology to transform how developments are structured and commercialized.',
        
        // Section 5
        'section5-title-bold': 'HOW WE EXECUTE IN',
        'section5-title-light': 'PRACTICE:',
        'process-card1-title': 'DEEP DUE DILIGENCE',
        'process-card1-desc': 'Eligibility assessment, risk analysis and economic viability. Only assets with solid fundamentals proceed.',
        'process-card2-title': 'TOKEN ENGINEERING',
        'process-card2-desc': 'Personalized smart contract design, rights definition, distribution rules and governance mechanisms.',
        'process-card3-title': 'QUALIFIED ONBOARDING',
        'process-card3-desc': 'Robust KYC/AML, suitability analysis and investor documentation within the highest regulatory standards.',
        'process-card4-title': 'LEGAL ARCHITECTURE',
        'process-card4-desc': 'Structuring of vehicles, guarantees and complete legal documentation. Each token represents clear and enforceable economic rights.',
        'process-card5-title': 'CONTROLLED ISSUANCE',
        'process-card5-desc': 'Deploy on enterprise blockchain, security testing and complete technical validation before go-live.',
        'process-card6-title': 'PERMANENT OPERATION',
        'process-card6-desc': 'Continuous management, periodic reports, yield distribution and holder support.',
        
        // Section 6
        'section6-title-main': 'THE STRUCTURE THAT TRANSFORMS',
        'section6-title-highlight': 'ASSETS INTO TOKENS',
        'benefit1-title': 'IMMEDIATE LIQUIDITY:',
        'benefit1-desc': 'Smart fractionation and 24/7 trading',
        'benefit2-title': 'REDUCED COST:',
        'benefit2-desc': 'Fewer intermediaries, automated processes',
        'benefit3-title': 'GLOBAL REACH:',
        'benefit3-desc': 'Qualified investors from any jurisdiction',
        'benefit4-title': 'TOTAL TRANSPARENCY:',
        'benefit4-desc': 'Every transaction auditable in real time',
        'benefit5-title': 'TRADITIONAL MARKET ADAPTATION:',
        'benefit5-desc': 'Tokenization integrated with the classic model, with legal security.',
        
        // Dashboard
        'dashboard-title': 'Dashboard',
        'dashboard-new-emission': 'New emission',
        'dashboard-total-value': 'Total tokenized value',
        'dashboard-total-subtitle': 'USD 24,000,000 | 100% of portfolio',
        'dashboard-assets-title': 'Tokenized Assets',
        'dashboard-assets-value': '12 assets',
        'dashboard-assets-subtitle': 'Real estate, receivables, art, luxury',
        'dashboard-investors-title': 'Active Investors',
        'dashboard-investors-subtitle': '320 fractional participations',
        'dashboard-projects-title': 'Projects/Developments',
        'dashboard-projects-value': '5 ongoing',
        'dashboard-projects-subtitle': '2 fundraising | 3 completed',
        'dashboard-quick-access': 'Quick access',
        'dashboard-access-investors': 'Investors',
        'dashboard-access-assets': 'Assets',
        'dashboard-access-projects': 'Projects',
        'dashboard-access-compliance': 'Compliance',
        
        // Section 7
        'section7-title-main': 'WHO IS',
        'section7-title-highlight': 'TOKENIZATION FOR?',
        'section7-subtitle': 'These examples illustrate how different sectors can access new capital flows, investors and efficiency.',
        'audience-construtoras': '/ CONSTRUCTION COMPANIES',
        'audience-what-we-offer': 'WHAT WE OFFER:',
        'audience-construtoras-desc': 'Tokenization of real estate units under construction, allowing fractional advance sales and fundraising.',
        'audience-learn-more': 'Learn more.',
        'audience-incorporadoras': '/ DEVELOPERS',
        'audience-what-we-offer-2': 'WHAT WE OFFER:',
        'audience-incorporadoras-desc': 'Structuring of tokenized SPVs, with digital participation in developments and distribution of results to investors.',
        'audience-learn-more-2': 'Learn more.',
        'audience-gestoras': '/ FUND MANAGERS',
        'audience-what-we-offer-3': 'WHAT WE OFFER:',
        'audience-gestoras-desc': 'Creation of tokenized real estate funds and structured receivables, expanding liquidity and investor base.',
        'audience-learn-more-3': 'Learn more.',
        'audience-proprietarios': '/ PROPERTY OWNERS',
        'audience-what-we-offer-4': 'WHAT WE OFFER:',
        'audience-proprietarios-desc': 'Tokenization of high-value real estate or physical assets (land, buildings, warehouses), or luxury market, for access to liquidity without full sale.',
        'audience-learn-more-4': 'Learn more.',
        'audience-family-offices': '/ FAMILY OFFICES',
        'audience-what-we-offer-5': 'WHAT WE OFFER:',
        'audience-family-offices-desc': 'Tokenized vehicles for asset management and diversification, focusing on real estate, receivables and alternative assets.',
        'audience-learn-more-5': 'Learn more.',
        'audience-proprietarios-ativos': '/ OWNERS OF ASSETS AND RIGHTS',
        'audience-what-we-offer-6': 'WHAT WE OFFER:',
        'audience-proprietarios-ativos-desc': 'Tokenization of artworks, jewelry, cars and exclusive items, with provenance registration and fractionation possibility.',
        'audience-learn-more-6': 'Learn more.',
        
        // Section 8
        'section8-title-bold': 'GOVERNANCE & COMPLIANCE:',
        'section8-title-light': 'WHY DOES THIS MATTER?',
        'section8-description': 'Tokenization without compliance is speculation. Sophisticated investors demand professional governance.',
        'result-label-2': 'Result:',
        'result-text-2': 'Each token has verifiable backing and integral regulatory compliance.',
        'governance-estruturas-title': 'LEGAL STRUCTURES',
        'governance-estruturas-desc': 'according to Brazilian and international legislation.',
        'governance-kyc-title': 'COMPLETE KYC/AML',
        'governance-kyc-desc': 'with verification of funds origin.',
        'governance-auditoria-title': 'CONTINUOUS AUDIT',
        'governance-auditoria-desc': 'with transparent reports.',
        'governance-protecao-title': 'DATA PROTECTION',
        'governance-protecao-desc': 'according to LGPD.',
        
        // Section 9
        'partnership-title': 'OFFICIAL PARTNER',
        'partnership-description': 'Matchain is the tokenization and digital identity infrastructure for Web3, uniting real assets, data and artificial intelligence in a secure and global ecosystem.',
        
        // Section 10
        'cta-title': 'THE TIME IS NOW',
        'cta-subtitle': 'Your assets deserve the liquidity that only tokenization can offer.',
        'cta-description': 'Large managers are already moving billions in tokenized RWAs. The market is formed, regulation is clear, technology is mature.',
        'next-title': 'BE THE NEXT ONE.',
        'cta-specialist': '> TALK TO OUR RWA SPECIALIST',
        
        // Footer
        'footer-sites': 'SITES',
        'footer-socials': 'SOCIALS',
        'footer-legal': 'LEGAL',
        'footer-terms': 'Terms of use',
        'footer-disclaimer': 'Disclaimer',
        'footer-rights': 'All Rights Reserved',
        'footer-copyright': '© 2024 Matchain'
    }
};

let currentLanguage = 'pt';

function toggleLanguage() {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Adicionar classe para animação
    document.body.classList.add('language-switching');
    
    // Atualizar textos
    const elementsWithLang = document.querySelectorAll('[data-lang]');
    elementsWithLang.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Trocar imagem do telefone
    const phoneImage = document.getElementById('phoneImage');
    if (phoneImage) {
        if (lang === 'en') {
            phoneImage.src = 'images/telefone-eng.png';
            phoneImage.alt = 'Matchain Complete Stack App';
        } else {
            phoneImage.src = 'images/telefone-pt.png';
            phoneImage.alt = 'App Matchain Stack Completo';
        }
    }
    
    // Atualizar botão de idioma
    const languageBtn = document.getElementById('languageToggle');
    if (languageBtn) {
        const flag = languageBtn.querySelector('.flag');
        const langText = languageBtn.querySelector('.lang-text');
        
        if (lang === 'en') {
            flag.textContent = '🇧🇷';
            langText.textContent = 'PT';
        } else {
            flag.textContent = '🇺🇸';
            langText.textContent = 'EN';
        }
    }
    
    // Remover classe de animação após um tempo
    setTimeout(() => {
        document.body.classList.remove('language-switching');
    }, 300);
    
    // Salvar preferência no localStorage
    localStorage.setItem('machain-language', lang);
}

// Carregar idioma salvo ao inicializar
function initLanguage() {
    const savedLanguage = localStorage.getItem('machain-language');
    if (savedLanguage && ['pt', 'en'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar idioma
    initLanguage();
    
    // Configuração das animações
    const animationOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Observer para seções 1-6 (fade-in simples)
    const simpleFadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-simple');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observer para elementos das seções 1-6 (fade-in básico)
    const simpleElementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('simple-fade-in');
                
                // Delay escalonado para cards (mesmo das seções 1-6, mas apenas opacity)
                if (entry.target.classList.contains('simple-stagger')) {
                    const cards = entry.target.querySelectorAll('.process-card, .card, .benefit-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('simple-fade-in');
                        }, index * 150);
                    });
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    // Criar observer para seções
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.classList.remove('animate-out');
            }
        });
    }, animationOptions);

    // Criar observer para elementos individuais
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Adicionar delay escalonado para cards em grid
                if (entry.target.classList.contains('stagger-animation')) {
                    const cards = entry.target.querySelectorAll('.process-card, .audience-card, .benefit-card');
                    cards.forEach((card, index) => {
                        card.style.animationDelay = `${index * 0.1}s`;
                        card.classList.add('slide-up');
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Selecionar seções 1-6 para fade-in simples
    const simpleFadeSections = document.querySelectorAll('.section-1, .section-2, .section-3, .section-4, .section-5, .section-6');
    simpleFadeSections.forEach((section, index) => {
        section.classList.add(`section-${index + 1}-fade`);
        simpleFadeObserver.observe(section);
    });

    // Elementos das seções 1-6 para fade-in básico
    const simpleElements = document.querySelectorAll(
        '.section-1 .title, .section-1 .subtitle, .section-1 .description, .section-1 .btn,' +
        '.section-2 .title, .section-2 .subtitle, .section-2 .description, .section-2 .card,' +
        '.section-3 .title, .section-3 .description, .section-3 .result-box, .section-3 .phone-mockup,' +
        '.section-4 .title, .section-4 .description, .section-4 .btn, .section-4 .building-images,' +
        '.section-5 .title, .section-5 .process-card,' +
        '.section-6 .title, .section-6 .benefit-card, .section-6 .dashboard-preview'
    );
    
    simpleElements.forEach(element => {
        element.classList.add('sections-1-6-element');
        simpleElementObserver.observe(element);
    });

    // Grids das seções 1-6 com animação escalonada simples
    const simpleGrids = document.querySelectorAll('.section-5 .cards-grid, .section-6 .benefits-list');
    simpleGrids.forEach(grid => {
        grid.classList.add('sections-1-6-element', 'simple-stagger');
        simpleElementObserver.observe(grid);
    });

    // Selecionar apenas seções 7-10 para animação avançada
    const animatedSections = document.querySelectorAll('.section-7, .section-8, .section-9, .section-10');
    animatedSections.forEach(section => {
        section.classList.add('section-animate');
        sectionObserver.observe(section);
    });

    // Elementos específicos para animação individual - apenas nas seções 7-10
    const animatedElements = document.querySelectorAll(
        '.section-7 .title, .section-7 .subtitle, .section-7 .description, .section-7 .card, .section-7 .benefit-card, .section-7 .process-card, .section-7 .audience-card, .section-7 .governance-item,' +
        '.section-8 .title, .section-8 .subtitle, .section-8 .description, .section-8 .card, .section-8 .benefit-card, .section-8 .process-card, .section-8 .audience-card, .section-8 .governance-item,' +
        '.section-9 .title, .section-9 .subtitle, .section-9 .description, .section-9 .card, .section-9 .benefit-card, .section-9 .process-card, .section-9 .audience-card, .section-9 .governance-item,' +
        '.section-10 .title, .section-10 .subtitle, .section-10 .description, .section-10 .card, .section-10 .benefit-card, .section-10 .process-card, .section-10 .audience-card, .section-10 .governance-item'
    );
    
    animatedElements.forEach(element => {
        element.classList.add('element-animate');
        elementObserver.observe(element);
    });

    // Adicionar classe especial para grids que precisam de animação escalonada - apenas seções 7-10
    const gridsWithStagger = document.querySelectorAll(
        '.section-7 .cards-grid, .section-7 .target-audience-grid, .section-7 .benefits-list,' +
        '.section-8 .cards-grid, .section-8 .target-audience-grid, .section-8 .benefits-list,' +
        '.section-9 .cards-grid, .section-9 .target-audience-grid, .section-9 .benefits-list,' +
        '.section-10 .cards-grid, .section-10 .target-audience-grid, .section-10 .benefits-list'
    );
    gridsWithStagger.forEach(grid => {
        grid.classList.add('stagger-animation');
        elementObserver.observe(grid);
    });

    // Animação especial para os gráficos e dashboard
    const chartElements = document.querySelectorAll('.chart-card-image, .dashboard-card');
    chartElements.forEach((element, index) => {
        element.classList.add('chart-animate');
        element.style.animationDelay = `${index * 0.2}s`;
        elementObserver.observe(element);
    });

    // Animação para o botão do dashboard
    const dashboardButton = document.querySelector('.expand-dashboard');
    if (dashboardButton) {
        dashboardButton.classList.add('pulse-animate');
        elementObserver.observe(dashboardButton);
    }

    // Remover paralaxe que pode estar causando problemas
    // Paralaxe desabilitado para evitar sobreposições

    // Smooth scroll para botões de CTA
    const ctaButtons = document.querySelectorAll('.btn a');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Adicionar efeito de ripple no clique
                const ripple = document.createElement('span');
                ripple.classList.add('ripple-effect');
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Scroll suave para a próxima seção (exemplo)
                const nextSection = this.closest('[class*="section-"]').nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Animação especial para números/valores
    const valueElements = document.querySelectorAll('.card-value, .value');
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                // Detectar se é um número para animação de contagem
                const numberMatch = text.match(/[\d,\.]+/);
                if (numberMatch) {
                    element.classList.add('number-animate');
                    animateNumber(element, numberMatch[0]);
                }
            }
        });
    }, { threshold: 0.5 });

    valueElements.forEach(element => {
        numberObserver.observe(element);
    });

    // Função para animar números
    function animateNumber(element, finalNumber) {
        const cleanNumber = finalNumber.replace(/[,\.]/g, '');
        const isDecimal = finalNumber.includes('.');
        const hasSeparator = finalNumber.includes(',');
        
        if (!isNaN(cleanNumber) && cleanNumber.length <= 10) {
            const finalValue = parseInt(cleanNumber);
            const duration = 2000;
            const steps = 60;
            const stepValue = finalValue / steps;
            const stepTime = duration / steps;
            
            let currentValue = 0;
            let currentStep = 0;
            
            const timer = setInterval(() => {
                currentStep++;
                currentValue += stepValue;
                
                if (currentStep >= steps) {
                    currentValue = finalValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(currentValue).toString();
                
                // Reformatar número com separadores
                if (hasSeparator && displayValue.length > 3) {
                    displayValue = displayValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
                
                // Manter o formato original
                element.textContent = element.textContent.replace(/[\d,\.]+/, displayValue);
            }, stepTime);
        }
    }

    // Otimização de performance - pausar animações quando não visível
    let isPageVisible = true;
    
    document.addEventListener('visibilitychange', function() {
        isPageVisible = !document.hidden;
        
        if (isPageVisible) {
            // Reativar animações
            document.body.classList.remove('animations-paused');
        } else {
            // Pausar animações
            document.body.classList.add('animations-paused');
        }
    });

    // Adicionar efeito de hover melhorado para cards
    const interactiveCards = document.querySelectorAll(
        '.process-card, .audience-card, .benefit-card, .dashboard-card'
    );
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });

    console.log('🚀 Animações de scroll da Machain carregadas com sucesso!');
});

// Função para reinicializar animações se necessário
function reinitializeAnimations() {
    document.dispatchEvent(new Event('DOMContentLoaded'));
}

// Exportar função para uso externo se necessário
window.MachainAnimations = {
    reinitialize: reinitializeAnimations
};
