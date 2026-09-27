/**
 * Comprehensive Metallurgical & Manufacturing Data Model
 * Extracted from MT2220 Technical Report: "Design of Door Handle"
 * Department of Materials Science & Engineering, University of Moratuwa
 */

export interface TeamMember {
  index: string;
  name: string;
  role: string;
  isLeadAuthor?: boolean; // Highlighted for Sadun Premakumara (210494D)
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    index: '210494D',
    name: 'PREMAKUMARA H.P.S.',
    role: 'Lead Metallurgist & Heat Treatment Process Architect',
    isLeadAuthor: true
  },
  {
    index: '210101A',
    name: 'DE SILVA G.A.I',
    role: 'Materials Characterization & Alloying Specialist'
  },
  {
    index: '210276L',
    name: 'KARUNARATHNE W.K.S.A',
    role: 'Ergonomics & Industrial Design Analyst'
  },
  {
    index: '210311R',
    name: 'KUMARA R.P.D.R',
    role: 'Mechanical Strength & Stress Analysis'
  },
  {
    index: '210345A',
    name: 'LIYANAGE S.W',
    role: 'Casting Technologies & Mold Design'
  },
  {
    index: '210533A',
    name: 'RATHNAMALALA T.N.S',
    role: 'SolidWorks CAD Drafting & Geometric Modeling'
  },
  {
    index: '210564T',
    name: 'SANDARU H.W.P',
    role: 'Phase Transformation & Microstructure Kinetics'
  },
  {
    index: '210700J',
    name: 'WICKRAMAGE W.S.E.L',
    role: 'Surface Finishing, Quality Assurance & Corrosion Testing'
  }
];

export interface MaterialComparison {
  id: string;
  name: string;
  image: string;
  durability: number; // 1-5
  corrosionResistance: number; // 1-5
  aestheticFlexibility: number; // 1-5
  costRating: 'Low' | 'Moderate' | 'High';
  hygieneRating: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  outdoorSuitability: boolean;
  pros: string[];
  cons: string[];
}

export const MATERIAL_COMPARISONS: MaterialComparison[] = [
  {
    id: 'stainless-steel',
    name: 'Stainless Steel (304)',
    image: '/assets/fig01_stainless_steel_handle.jpeg',
    durability: 5.0,
    corrosionResistance: 5.0,
    aestheticFlexibility: 4.8,
    costRating: 'Moderate',
    hygieneRating: 'Excellent',
    outdoorSuitability: true,
    pros: [
      'Self-healing passive Cr2O3 oxide film provides unmatched corrosion resistance',
      'Non-porous hygienic surface inhibits bacterial growth and supports harsh disinfection',
      'High tensile strength (515-620 MPa) prevents bending, breaking, or fatigue failure',
      'Versatile aesthetic finishes: Mirror polish, satin brushed, and PVD titanium coatings'
    ],
    cons: [
      'Higher initial material cost compared to zinc alloys or carbon steel',
      'Work hardens rapidly during cold forming, requiring solution annealing'
    ]
  },
  {
    id: 'wood',
    name: 'Natural Hardwood',
    image: '/assets/fig02_wood_door_handle.jpeg',
    durability: 3.2,
    corrosionResistance: 2.0,
    aestheticFlexibility: 4.5,
    costRating: 'Moderate',
    hygieneRating: 'Fair',
    outdoorSuitability: false,
    pros: [
      'Warm tactile touch with organic wood grain texture',
      'Easily carved or shaped into custom architectural motifs',
      'Complements traditional residential wooden entrance doors'
    ],
    cons: [
      'Susceptible to moisture absorption, swelling, rot, and fungal decay',
      'Unsuitable for humid environments, outdoor entrances, or sanitary clinics'
    ]
  },
  {
    id: 'aluminum',
    name: 'Anodized Aluminum',
    image: '/assets/fig03_aluminum_door_handle.jpeg',
    durability: 3.8,
    corrosionResistance: 4.2,
    aestheticFlexibility: 4.0,
    costRating: 'Moderate',
    hygieneRating: 'Good',
    outdoorSuitability: true,
    pros: [
      'Very lightweight (1/3 the density of steel), easing installation',
      'Anodized surface resists oxidation and outdoor weathering',
      'Cost-effective for extruded commercial profiles'
    ],
    cons: [
      'Lower tensile yield strength; prone to surface scratching and gouging',
      'Utilitarian appearance that lacks the luxury heft of solid steel or brass'
    ]
  },
  {
    id: 'brass',
    name: 'Architectural Brass',
    image: '/assets/fig04_brass_door_handle.jpeg',
    durability: 4.3,
    corrosionResistance: 4.0,
    aestheticFlexibility: 4.9,
    costRating: 'High',
    hygieneRating: 'Excellent',
    outdoorSuitability: true,
    pros: [
      'Inherent oligodynamic antimicrobial effect destroys pathogens and viruses',
      'Luxurious warm gold/copper aesthetic for classical architecture',
      'High fire resistance and thermal integrity'
    ],
    cons: [
      'Tarnishes and oxidizes over time, requiring constant polishing upkeep',
      'Expensive raw material cost; potential allergy sensitivity for nickel/copper'
    ]
  },
  {
    id: 'zinc-alloy',
    name: 'Zinc Alloy (Zamak)',
    image: '/assets/fig05_zinc_alloy_handle.png',
    durability: 3.0,
    corrosionResistance: 3.5,
    aestheticFlexibility: 4.2,
    costRating: 'Low',
    hygieneRating: 'Good',
    outdoorSuitability: false,
    pros: [
      'Low melting point enables cheap high-pressure die casting',
      'Supports wide range of electroplated decorative finishes (chrome, nickel, antique)',
      'Highly economical for mass-market residential hardware'
    ],
    cons: [
      'Inferior mechanical strength compared to stainless steel or brass',
      'Plated coatings eventually wear off, exposing the brittle zinc core to pitting'
    ]
  },
  {
    id: 'mdf',
    name: 'MDF Composite',
    image: '/assets/fig06_mdf_door_handle.jpeg',
    durability: 2.0,
    corrosionResistance: 1.0,
    aestheticFlexibility: 3.0,
    costRating: 'Low',
    hygieneRating: 'Poor',
    outdoorSuitability: false,
    pros: [
      'Extremely low manufacturing cost from compressed wood dust fibers',
      'Seamless flat appearance for minimalist budget interior cabinets'
    ],
    cons: [
      'Quickly deteriorates under humidity or accidental water spills',
      'Inadequate mechanical strength for high-traffic entrance doors'
    ]
  }
];

export interface StainlessGrade {
  grade: string;
  series: string;
  compositionSummary: string;
  formability: string;
  relativeCost: string;
  keyStrengths: string;
  bestFit: string;
}

export const STAINLESS_GRADES: StainlessGrade[] = [
  {
    grade: 'AISI 304 (18-8)',
    series: 'Austenitic (FCC)',
    compositionSummary: '18-20% Cr, 8-10.5% Ni, 0.08% C max',
    formability: 'Exceptional (40% elongation)',
    relativeCost: 'Moderate-High (Nickel premium)',
    keyStrengths: 'Supreme corrosion resistance, hygienic oligodynamic surface, heat resistance up to 870°C, high ductility.',
    bestFit: 'Architectural entrance handles, medical devices, sanitary environments.'
  },
  {
    grade: 'AISI 201',
    series: 'Austenitic (Mn-substituted)',
    compositionSummary: '16-18% Cr, 3.5-5.5% Ni, 5.5-7.5% Mn, 0.15% C',
    formability: 'Good, but stiffer than 304',
    relativeCost: 'Lower (Reduced Ni content)',
    keyStrengths: 'Higher tensile strength than 304 due to interstitial nitrogen, lower cost.',
    bestFit: 'Budget interior hardware, decorative transit trim.'
  },
  {
    grade: 'AISI 439',
    series: 'Ferritic (BCC)',
    compositionSummary: '17-19% Cr, Ti-stabilized, <0.03% C',
    formability: 'Moderate',
    relativeCost: 'Low (Nickel-free)',
    keyStrengths: 'Zero stress-corrosion cracking risk, matches appliance skins.',
    bestFit: 'Kitchen appliances, automotive exhaust parts.'
  },
  {
    grade: 'AISI 441',
    series: 'Ferritic (BCC)',
    compositionSummary: '17.5-18.5% Cr, Nb+Ti dual stabilized',
    formability: 'Moderate',
    relativeCost: 'Low-Moderate',
    keyStrengths: 'Excellent high-temperature oxidation resistance, low thermal expansion.',
    bestFit: 'Oven door handles, boiler heat exchangers.'
  }
];

export interface CastingMethod {
  name: string;
  image: string;
  suitabilityFor304SS: 'Ideal' | 'Unsuitable' | 'Limited';
  dimensionalAccuracy: string;
  surfaceFinish: string;
  toolingCost: string;
  productionVolume: string;
  advantages: string[];
  limitations: string[];
}

export const CASTING_METHODS: CastingMethod[] = [
  {
    name: 'Investment Casting (Lost-Wax)',
    image: '/assets/fig16_investment_casting_steps.png',
    suitabilityFor304SS: 'Ideal',
    dimensionalAccuracy: '±0.1 mm (Tightest Tolerance)',
    surfaceFinish: 'Ra 1.6 - 3.2 μm (Mirror / Satin ready)',
    toolingCost: 'Low-to-Medium (Rapid 3D Wax Printing)',
    productionVolume: 'Flexible (Prototype to Mass)',
    advantages: [
      'Handles high melting point of 304 SS (1371-1427°C) via refractory ceramic shell',
      'Accurately replicates complex scalloped wave ergonomics in a single near-net-shape piece',
      'Near-zero material waste; ceramic slurry shell can be broken without parting line draft angles'
    ],
    limitations: [
      'Multi-stage process requiring 24-36 hour ceramic shell drying cycles',
      'Labor-intensive manual handling of wax trees'
    ]
  },
  {
    name: 'Sand Casting',
    image: '/assets/fig11_sand_casting_schematic.jpeg',
    suitabilityFor304SS: 'Limited',
    dimensionalAccuracy: '±1.5 - 2.5 mm',
    surfaceFinish: 'Ra 12.5 - 25 μm (Rough, requires heavy grinding)',
    toolingCost: 'Very Low',
    productionVolume: 'Low to Medium',
    advantages: [
      'Low cost tooling using reusable green sand or zircon sand',
      'Capable of casting massive structural parts'
    ],
    limitations: [
      'Rough sand-fused surface finish requires extensive abrasive machining',
      'Gas porosity and mold erosion from high specific gravity molten steel'
    ]
  },
  {
    name: 'Gravity Die Casting (GDC)',
    image: '/assets/fig13_gravity_die_casting.jpeg',
    suitabilityFor304SS: 'Unsuitable',
    dimensionalAccuracy: '±0.4 - 0.8 mm',
    surfaceFinish: 'Ra 3.2 - 6.3 μm',
    toolingCost: 'High (Metallic permanent molds)',
    productionVolume: 'High (82,500 parts/die)',
    advantages: [
      '20% higher mechanical properties due to rapid metallic chilling',
      'Dimensional accuracy superior to sand casting'
    ],
    limitations: [
      'Cannot cast steels due to premature metallic die melting at 1400°C',
      'Restricted to non-ferrous alloys (Al, Mg, Cu, Zn)'
    ]
  },
  {
    name: 'High Pressure Die Casting (HPDC)',
    image: '/assets/fig14_pressure_die_casting.jpeg',
    suitabilityFor304SS: 'Unsuitable',
    dimensionalAccuracy: '±0.05 - 0.2 mm',
    surfaceFinish: 'Ra 0.8 - 1.6 μm',
    toolingCost: 'Very High (Hardened H13 tool steel dies)',
    productionVolume: 'Very High Mass Production',
    advantages: [
      'Extremely rapid cycle times (seconds per part)',
      'Near-perfect surface finish without post-machining'
    ],
    limitations: [
      'Severe thermal shock destroys tool steel dies under high-melting steels',
      'Limited to low-melting light alloys (Al, Zn, Mg)'
    ]
  },
  {
    name: 'Centrifugal Casting',
    image: '/assets/fig15_centrifugal_casting.jpeg',
    suitabilityFor304SS: 'Limited',
    dimensionalAccuracy: '±0.5 mm',
    surfaceFinish: 'Ra 3.2 - 6.3 μm',
    toolingCost: 'High (Rotating die machinery)',
    productionVolume: 'Medium',
    advantages: [
      'High density and zero internal air bubbles due to high g-forces',
      'Displaces low-density slag impurities toward inner bore'
    ],
    limitations: [
      'Restricted exclusively to axisymmetric cylindrical tubular geometries',
      'Cannot form non-circular asymmetrical handles'
    ]
  }
];

export interface InvestmentCastingStep {
  stepNumber: number;
  name: string;
  summary: string;
  details: string[];
  parameter: string;
  iconName: string;
}

export const CASTING_STEPS: InvestmentCastingStep[] = [
  {
    stepNumber: 1,
    name: 'CAD Modeling & Wax 3D Printing',
    summary: 'Precision 3D geometric design in SolidWorks followed by Stereolithography (SL) wax printing.',
    details: [
      'Handle geometry modeled in SolidWorks with exact 24 cm length and 2 cm scalloped grip pitch',
      'SL 3D printer deposits microcrystalline/paraffin wax with tight dimensional tolerances',
      'Zero tooling lead time for rapid design iteration and custom ergonomics'
    ],
    parameter: 'Wax Melting Temp: 71 - 93°C',
    iconName: 'Box'
  },
  {
    stepNumber: 2,
    name: 'Wax Tree Assembly (Pattern Tree)',
    summary: 'Mounting 4 identical wax handle patterns onto a central wax pouring sprue.',
    details: [
      'Central sprue acts as runner manifold for molten metal flow',
      '4 handle patterns mounted symmetrically to balance fluid hydrodynamics',
      'Gating and in-gates positioned to prevent hot spot shrinkage porosity'
    ],
    parameter: 'Cluster: 4 Handles per Tree',
    iconName: 'GitFork'
  },
  {
    stepNumber: 3,
    name: 'Ceramic Shell / Stucco Building',
    summary: 'Repetitive dipping in colloidal silica/zircon slurry and fluidized stucco bed.',
    details: [
      'Primary dip creates an ultra-fine refractory face coat for mirror surface replication',
      'Subsequent 6 - 8 stucco coats apply coarse refractory sand, CaO, and Portland cement',
      'Shell dried in climate-controlled chamber for 24 - 36 hours to achieve structural rigidity'
    ],
    parameter: 'Coats: 6 - 8 Layers | Dry Time: 24 - 36 hrs',
    iconName: 'Layers'
  },
  {
    stepNumber: 4,
    name: 'Dewaxing (Wax Evacuation)',
    summary: 'Steam autoclave or flash furnace heating to melt and drain the wax pattern.',
    details: [
      'High-pressure steam rapidly expands and melts wax without cracking the ceramic shell',
      'Wax drains out completely, leaving an intricate hollow cavity',
      'Recovered wax is filtered and recycled for runner sprues'
    ],
    parameter: 'Dewaxing Temp: 160 - 200°F (71 - 93°C)',
    iconName: 'Flame'
  },
  {
    stepNumber: 5,
    name: 'Ceramic Shell Preheating',
    summary: 'Firing ceramic shell to extreme temperature to burn off organics and prevent thermal shock.',
    details: [
      'Shell fired in a high-temperature kiln up to 982 - 1204°C (1800 - 2200°F)',
      'Eliminates all moisture and gas-producing volatiles to prevent casting porosity',
      'Preheating ensures molten 304 stainless steel flows smoothly into thin scalloped details without premature freezing'
    ],
    parameter: 'Preheat Temp: 982 - 1204°C (1800 - 2200°F)',
    iconName: 'Thermometer'
  },
  {
    stepNumber: 6,
    name: 'Induction Melting & Pouring',
    summary: 'Superheated molten AISI 304 stainless steel is poured into the preheated mold.',
    details: [
      'High-purity 304 stainless steel melted in an induction furnace under argon/protective cover',
      'Poured at 1371 - 1427°C (2500 - 2600°F) with controlled laminar stream',
      'Gravity feed fills all 4 handle cavities uniformly'
    ],
    parameter: 'Pouring Temp: 1371 - 1427°C (2500 - 2600°F)',
    iconName: 'Droplet'
  },
  {
    stepNumber: 7,
    name: 'Controlled Solidification & Cooling',
    summary: 'Molten metal solidifies directionally from the thin scalloped tips toward the sprue.',
    details: [
      'Directional solidification ensures shrinkage occurs inside the sacrificial runner',
      'As-cast structure contains coarse columnar austenite grains and grain boundary carbides',
      'Allowed to cool to room temperature before breakout'
    ],
    parameter: 'Cooling: Quiescent Ambient',
    iconName: 'Clock'
  },
  {
    stepNumber: 8,
    name: 'Vibratory Ceramic Shell Breakout',
    summary: 'Mechanical vibration and pneumatic hammers fracture the brittle ceramic shell.',
    details: [
      'The tree is clamped onto a vibratory breakout table',
      'Ceramic shell crumbles away without scratching the solid stainless steel casting',
      'Residual ceramic traces removed via gentle aluminum oxide sandblasting'
    ],
    parameter: 'Method: High-Frequency Vibratory Table',
    iconName: 'Activity'
  },
  {
    stepNumber: 9,
    name: 'Cutoff, Linishing & Heat Treatment',
    summary: 'Handles severed from central sprue and transferred directly to the Solution Heat Treatment furnace.',
    details: [
      'Abrasive water-cooled cut-off saw severs in-gates flush with handle standoffs',
      'Coarse deburring and pre-polishing of parting gates',
      'Transferred directly to Premakumara\'s Solution Treatment (1050°C + Water Quench) to achieve peak corrosion resistance and ductility'
    ],
    parameter: 'Destination: Solution Annealing Furnace',
    iconName: 'ShieldCheck'
  }
];

export interface ReportChapterData {
  id: string;
  chapterNumber: string;
  title: string;
  pageRange: string;
  summary: string;
  equations: { name: string; latex: string; explanation: string }[];
  keyFigures: { title: string; image: string; caption: string }[];
  keyTakeaways: string[];
}

export const REPORT_CHAPTERS_DATA: ReportChapterData[] = [
  {
    id: 'ch1',
    chapterNumber: 'Chapter 1',
    title: 'Introduction & Architectural Philosophy',
    pageRange: 'Pages 1–3',
    summary: 'Establishes the door handle not merely as a utilitarian latching mechanism, but as the critical tactile and architectural interface between humans and their built environment. Analyzes ergonomics, accessibility, cultural significance, and the design decision to create a solid static pull handle that completely eliminates internal mechanical wear, friction squeaking, and spring failure.',
    equations: [
      {
        name: 'Tactile Interface Force Equilibrium',
        latex: 'F_{\\text{pull}} = F_{\\text{latch}} + F_{\\text{inertia}} + F_{\\text{friction}}',
        explanation: 'A solid pull handle removes internal friction components, relying purely on smooth opening forces.'
      }
    ],
    keyFigures: [
      {
        title: 'Ergonomic Types of Door Handles',
        image: '/assets/fig18_ergonomic_handle_types.jpeg',
        caption: 'Figure 18: Comparison of knobs, levers, drop rings, and architectural pull handles.'
      }
    ],
    keyTakeaways: [
      'First point of physical contact with any architectural space',
      'Static solid handle eliminates mechanical springs and moving latch wear',
      'Ergonomic scalloped ridges accommodate diverse palm sizes and wet/gloved hands'
    ]
  },
  {
    id: 'ch2',
    chapterNumber: 'Chapter 2',
    title: 'Research & Comprehensive Material Analysis',
    pageRange: 'Pages 4–13',
    summary: 'Exhaustive comparative evaluation of door handle materials: Stainless Steel, Natural Wood, Aluminum, Brass, Zinc Alloy, and MDF. Details why AISI 304 Austenitic Stainless Steel was selected based on its chromium oxide passive layer, non-porous hygienic oligodynamic properties, and mechanical strength. Compares stainless steel grades (304 vs 201 vs 439 vs 441) and breaks down 304 elemental chemistry.',
    equations: [
      {
        name: 'Pitting Resistance Equivalent Number',
        latex: '\\text{PREN} = \\%\\text{Cr} + 3.3\\%\\text{Mo} + 16\\%\\text{N} \\approx 18.5 - 20.0',
        explanation: 'Quantifies the electrochemical resistance of 304 stainless steel to chloride pitting corrosion.'
      },
      {
        name: 'Martensite Start Suppression in Austenitic Stainless',
        latex: 'M_s (^{\\circ}\\text{C}) = 502 - 810(\\%\\text{C}) - 1230(\\%\\text{N}) - 13.7(\\%\\text{Mn}) - 28.4(\\%\\text{Ni}) - 13.7(\\%\\text{Cr})',
        explanation: 'With 18% Cr and 9% Ni, Ms drops below -50°C, stabilizing FCC austenite at room temperature.'
      }
    ],
    keyFigures: [
      {
        title: 'Material Finishes Comparison',
        image: '/assets/fig17_handle_material_finishes.jpeg',
        caption: 'Figure 17: Commercial door handles in brass, bronze, stainless steel, and pewter.'
      },
      {
        title: 'Fe-C Equilibrium Phase Diagram',
        image: '/assets/fig08_fe_c_phase_diagram.png',
        caption: 'Figure 8: Iron-carbon phase transformation boundaries used in heat treatment analysis.'
      }
    ],
    keyTakeaways: [
      '304 Stainless Steel (18% Cr, 8% Ni) creates an instantaneous self-healing Cr2O3 passive film',
      'Non-porous surface provides hostile conditions for bacteria and virus colonization',
      'High elongation (40%) and tensile strength (515-620 MPa) ensure exceptional durability'
    ]
  },
  {
    id: 'ch3',
    chapterNumber: 'Chapter 3',
    title: 'Industrial Design, Ergonomics & CAD Modeling',
    pageRange: 'Pages 14–21',
    summary: 'Presents the physical and ergonomic engineering of the handle. Formulates the scalloped wavy grip profile with 2 cm wavelength to fit human finger anatomical pitch. Details the mounting standoff geometry on standard front wooden doors (36" × 80" × 1-3/4"). Presents the hand-drawn 1:1 scale dimensioned drawing (Figure 21) and the complete SolidWorks 2D CAD engineering orthographic projection drawing (Figure 22).',
    equations: [
      {
        name: 'Bending Stress in Handle Standoff',
        latex: '\\sigma_{\\text{bend}} = \\frac{M \\cdot y}{I} = \\frac{(F/2) \\cdot L_{\\text{standoff}}}{\\frac{\\pi d^3}{32}} \\le [\\sigma_{\\text{allow}}]',
        explanation: 'Ensures the 2.0 cm diameter standoff post withstands severe human pull forces (>1000 N) without deformation.'
      }
    ],
    keyFigures: [
      {
        title: 'Hand Drawing of Design (1:1 Scale)',
        image: '/assets/fig21_hand_drawing_dimensions_scale.jpeg',
        caption: 'Figure 21: Original 1:1 scale dimensional hand drawing detailing 24 cm length and 2 cm scalloped pitch.'
      },
      {
        title: 'SolidWorks Orthographic CAD Drawing',
        image: '/assets/fig22_solidworks_cad_engineering_drawing.jpeg',
        caption: 'Figure 22: Engineering orthographic projections (Plan, Side, Front, 3D Isometric) with Moratuwa title block.'
      }
    ],
    keyTakeaways: [
      'Total handle length: 24 cm / 25 cm with 16 cm center-to-center standoff span',
      '2.0 cm scalloped waves provide intuitive, non-slip ergonomic tactile indexing',
      'Solid cross-section provides high rigidity without requiring internal reinforcing ribs'
    ]
  },
  {
    id: 'ch4',
    chapterNumber: 'Chapter 4',
    title: 'Mold & Die Design / Casting Manufacturing',
    pageRange: 'Pages 22–32',
    summary: 'Technical review of five casting processes: Sand Casting, Gravity Die Casting, Pressure Die Casting, Centrifugal Casting, and Investment Casting. Analyzes why investment casting (lost-wax) is the sole viable method for 304 stainless steel given its 1400°C pouring temperature. Outlines the 9-stage casting procedure from SolidWorks 3D wax printing to ceramic shell breakout and sprue cutting.',
    equations: [
      {
        name: 'Darcy-Weisbach Gating Flow Resistance',
        latex: 'h_f = f \\frac{L}{D} \\frac{v^2}{2g}',
        explanation: 'Minimizes turbulence and air entrapment in the investment casting ceramic runner manifold.'
      }
    ],
    keyFigures: [
      {
        title: 'Investment Casting Procedure',
        image: '/assets/fig16_investment_casting_steps.png',
        caption: 'Figure 16: The 6 fundamental stages of ceramic shell investment casting.'
      },
      {
        title: '3D CAD Wax Tree Assembly',
        image: '/assets/fig23_3d_cad_wax_tree_assembly.jpeg',
        caption: 'Figure 23: SolidWorks model of 4 handle patterns mounted to the central pouring sprue.'
      }
    ],
    keyTakeaways: [
      'High pouring temperature (1371-1427°C) precludes metal dies used in pressure die casting',
      'Zircon and colloidal silica ceramic slurry provides tight ±0.1 mm tolerance and fine Ra 1.6 μm finish',
      'Cluster tree assembly produces 4 door handles per casting pour, maximizing foundry efficiency'
    ]
  },
  {
    id: 'ch5',
    chapterNumber: 'Chapter 5',
    title: 'The Heat Treatment Plan (Designed by Sadun Premakumara)',
    pageRange: 'Pages 33–43',
    summary: 'The centerpiece metallurgical contribution engineered by Sadun Premakumara (210494D). Formulates the complete Solution Treatment (Solution Annealing) cycle for cast 304 stainless steel. Details the thermodynamic dissolution of chromium carbides (M23C6) at 1020–1080°C (GB1200 standard), rapid agitated water quenching to prevent sensitization (intergranular corrosion) and brittle Sigma (σ) phase embrittlement, and dislocation relaxation for residual stress relief.',
    equations: [
      {
        name: 'Temperature-Dependent Carbon Solubility in Austenite',
        latex: 'C_{\\text{sol}}(T) = 0.02\\% \\, (600^{\\circ}\\text{C}) \\longrightarrow 0.34\\% \\, (1200^{\\circ}\\text{C})',
        explanation: 'Elevating to 1050°C ensures all 0.08% carbon completely dissolves into the FCC solid solution matrix.'
      },
      {
        name: 'Residual Stress Thermal Relief Relation',
        latex: '\\Delta \\sigma_{\\text{residual}} = \\sigma_{\\text{initial}} \\left(1 - \\frac{\\sigma_{y,\\text{hot}}(T)}{\\sigma_{y,\\text{room}}}\\right)',
        explanation: 'At solution annealing temperatures, the hot yield strength drops below residual casting stresses, driving plastic relaxation.'
      }
    ],
    keyFigures: [
      {
        title: 'Stress Relief Annealing Cycle',
        image: '/assets/fig09_stress_relief_curve.jpeg',
        caption: 'Figure 9: Time-temperature heating, soaking, and controlled cooling curve for stress alleviation.'
      },
      {
        title: 'Microstructure Grain Refinement',
        image: '/assets/fig10_grain_refinement_pearlite.jpeg',
        caption: 'Figure 10: Comparative grain structure showing lamellar refinement during annealing and normalizing.'
      }
    ],
    keyTakeaways: [
      'Solution temperature: 1020°C - 1080°C held for 60 minutes for complete carbide dissolution',
      'Rapid water quenching freezes carbon in solution, avoiding the 500-850°C sensitization window',
      'Eliminates brittle intermetallic Sigma (σ) phase and relieves >90% of internal casting stresses'
    ]
  },
  {
    id: 'ch6',
    chapterNumber: 'Chapter 6',
    title: 'Conclusions & Academic References',
    pageRange: 'Pages 44–46',
    summary: 'Synthesizes the multidisciplinary engineering process: from ergonomic concept, material selection of AISI 304, SolidWorks CAD drafting, and investment casting to the critical Solution Annealing heat treatment designed by Premakumara H.P.S. Complete bibliography containing 28 international academic papers, standards (GB1200, ASTM), and industrial metallurgical references.',
    equations: [],
    keyFigures: [],
    keyTakeaways: [
      'Complete integration of material science, mechanical drafting, and thermal processing',
      'Final door handle achieves superior corrosion resistance, high tensile strength, and lifelong durability',
      '28 verified academic and industrial research citations'
    ]
  }
];
