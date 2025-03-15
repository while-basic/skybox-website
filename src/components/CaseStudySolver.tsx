'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaServer, FaBolt, FaSnowflake, FaNetworkWired, FaShieldAlt, FaChartLine } from 'react-icons/fa';

// Define types
interface Challenge {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  selected: boolean;
}

interface Solution {
  title: string;
  description: string;
  steps: string[];
  benefits: string[];
  timeline: string;
  roi: string;
}

const CaseStudySolver = () => {
  // Available challenges
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 'cooling',
      title: 'Cooling Efficiency',
      icon: <FaSnowflake className="text-blue-400" />,
      description: 'Optimize cooling systems to reduce energy consumption while maintaining optimal operating temperatures.',
      selected: false
    },
    {
      id: 'power',
      title: 'Power Redundancy',
      icon: <FaBolt className="text-yellow-400" />,
      description: 'Enhance power infrastructure to ensure continuous operation during outages or maintenance.',
      selected: false
    },
    {
      id: 'scaling',
      title: 'Scaling Infrastructure',
      icon: <FaServer className="text-primary" />,
      description: 'Expand data center capacity to accommodate growing workloads without disrupting operations.',
      selected: false
    },
    {
      id: 'network',
      title: 'Network Optimization',
      icon: <FaNetworkWired className="text-green-400" />,
      description: 'Improve network architecture to reduce latency and increase throughput for critical applications.',
      selected: false
    },
    {
      id: 'security',
      title: 'Physical Security',
      icon: <FaShieldAlt className="text-red-400" />,
      description: 'Enhance physical security measures to protect critical infrastructure from unauthorized access.',
      selected: false
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Analytics',
      icon: <FaChartLine className="text-purple-400" />,
      description: 'Implement advanced monitoring systems to gain insights into performance and identify potential issues.',
      selected: false
    }
  ]);
  
  // Generated solution
  const [solution, setSolution] = useState<Solution | null>(null);
  
  // Loading state
  const [loading, setLoading] = useState(false);

  // Toggle challenge selection
  const toggleChallenge = (id: string) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id 
        ? { ...challenge, selected: !challenge.selected } 
        : challenge
    ));
  };

  // Generate solution based on selected challenges
  const generateSolution = () => {
    setLoading(true);
    
    // Get selected challenges
    const selectedChallenges = challenges.filter(challenge => challenge.selected);
    
    // Simulate API call or complex calculation
    setTimeout(() => {
      // Generate solution based on selected challenges
      if (selectedChallenges.length === 0) {
        setSolution(null);
        setLoading(false);
        return;
      }
      
      // Create a personalized solution
      const newSolution: Solution = {
        title: `Solution for ${selectedChallenges.map(c => c.title).join(' & ')}`,
        description: generateDescription(selectedChallenges),
        steps: generateSteps(selectedChallenges),
        benefits: generateBenefits(selectedChallenges),
        timeline: generateTimeline(selectedChallenges),
        roi: generateROI(selectedChallenges)
      };
      
      setSolution(newSolution);
      setLoading(false);
    }, 1500);
  };

  // Helper functions to generate solution components
  const generateDescription = (selectedChallenges: Challenge[]): string => {
    if (selectedChallenges.length === 1) {
      const challenge = selectedChallenges[0];
      
      switch (challenge.id) {
        case 'cooling':
          return 'I propose implementing a hybrid cooling solution that combines traditional CRAC/CRAH units with targeted in-row cooling for high-density areas. This approach optimizes airflow management through hot/cold aisle containment and uses advanced control systems to maintain ideal temperatures while minimizing energy consumption.';
        case 'power':
          return 'My solution involves implementing a true 2N power distribution architecture with independent A/B power paths, supported by modular UPS systems and intelligent PDUs. This design ensures complete redundancy while enabling maintenance without service interruption.';
        case 'scaling':
          return 'I recommend a phased expansion approach using modular infrastructure components that can be deployed without disrupting existing operations. This includes pre-provisioned power and cooling capacity, standardized rack configurations, and a structured cabling system designed for future growth.';
        case 'network':
          return 'My network optimization strategy focuses on implementing a spine-leaf architecture with high-bandwidth interconnects, optimized traffic routing, and quality of service policies. This design reduces latency, eliminates bottlenecks, and provides multiple redundant paths for critical data flows.';
        case 'security':
          return 'I propose a multi-layered physical security system that combines advanced access control, comprehensive video surveillance, and environmental monitoring. This approach creates multiple security zones with progressively stricter access requirements as you approach critical assets.';
        case 'monitoring':
          return 'My monitoring solution integrates DCIM tools with predictive analytics to provide real-time visibility into all critical systems. This includes custom dashboards for different stakeholders, automated alerting with escalation procedures, and trend analysis for capacity planning.';
        default:
          return 'Based on my experience at T5 Data Centers, I\'ve developed a comprehensive solution that addresses your specific challenges while optimizing performance, reliability, and efficiency.';
      }
    }
    
    // Multiple challenges selected
    return `I've developed an integrated approach that addresses your ${selectedChallenges.map(c => c.title.toLowerCase()).join(' and ')} challenges simultaneously. This holistic solution ensures that improvements in one area complement and enhance the others, maximizing overall benefits while minimizing implementation complexity.`;
  };

  const generateSteps = (selectedChallenges: Challenge[]): string[] => {
    const commonSteps = [
      'Conduct comprehensive assessment of current infrastructure and requirements',
      'Develop detailed implementation plan with minimal disruption to operations',
      'Procure necessary equipment and resources from trusted vendors',
      'Execute phased implementation with continuous testing and validation',
      'Provide comprehensive documentation and knowledge transfer',
      'Conduct post-implementation review and optimization'
    ];
    
    let specificSteps: string[] = [];
    
    for (const challenge of selectedChallenges) {
      switch (challenge.id) {
        case 'cooling':
          specificSteps = [
            ...specificSteps,
            'Implement computational fluid dynamics (CFD) modeling to optimize airflow',
            'Install hot/cold aisle containment systems to prevent air mixing',
            'Deploy in-row cooling units for targeted cooling of high-density racks',
            'Implement intelligent temperature monitoring and control systems'
          ];
          break;
        case 'power':
          specificSteps = [
            ...specificSteps,
            'Install redundant power distribution paths (A/B feeds)',
            'Implement modular UPS systems with N+1 redundancy',
            'Deploy intelligent PDUs with remote monitoring and control',
            'Establish automated failover testing procedures'
          ];
          break;
        case 'scaling':
          specificSteps = [
            ...specificSteps,
            'Design standardized rack configurations for rapid deployment',
            'Implement structured cabling system with capacity for future growth',
            'Pre-provision power and cooling infrastructure for expansion zones',
            'Develop automated provisioning and configuration management tools'
          ];
          break;
        case 'network':
          specificSteps = [
            ...specificSteps,
            'Implement spine-leaf network architecture with redundant paths',
            'Deploy high-bandwidth interconnects between network tiers',
            'Optimize traffic routing with quality of service policies',
            'Implement network monitoring and analytics tools'
          ];
          break;
        case 'security':
          specificSteps = [
            ...specificSteps,
            'Implement multi-factor authentication for all access points',
            'Deploy comprehensive video surveillance with analytics',
            'Establish security zones with progressive access controls',
            'Implement environmental monitoring for early threat detection'
          ];
          break;
        case 'monitoring':
          specificSteps = [
            ...specificSteps,
            'Deploy integrated DCIM platform with custom dashboards',
            'Implement predictive analytics for proactive maintenance',
            'Establish automated alerting with escalation procedures',
            'Develop capacity planning tools based on historical trends'
          ];
          break;
      }
    }
    
    return [...new Set([...specificSteps, ...commonSteps])];
  };

  const generateBenefits = (selectedChallenges: Challenge[]): string[] => {
    const commonBenefits = [
      'Improved operational efficiency and reduced management overhead',
      'Enhanced reliability and reduced risk of service disruptions',
      'Optimized resource utilization and reduced waste',
      'Improved visibility and control over critical infrastructure',
      'Scalable foundation for future growth and technology adoption'
    ];
    
    let specificBenefits: string[] = [];
    
    for (const challenge of selectedChallenges) {
      switch (challenge.id) {
        case 'cooling':
          specificBenefits = [
            ...specificBenefits,
            '15-30% reduction in cooling energy consumption',
            'Elimination of hot spots and improved equipment reliability',
            'Increased cooling capacity for high-density deployments',
            'Reduced PUE (Power Usage Effectiveness) metrics'
          ];
          break;
        case 'power':
          specificBenefits = [
            ...specificBenefits,
            'Elimination of single points of failure in power distribution',
            'Ability to perform maintenance without service interruption',
            'Improved power quality and protection from grid disturbances',
            'Enhanced visibility into power consumption patterns'
          ];
          break;
        case 'scaling':
          specificBenefits = [
            ...specificBenefits,
            'Ability to expand capacity without disrupting existing operations',
            'Reduced time-to-market for new deployments',
            'Standardized infrastructure for consistent performance',
            'Optimized capital expenditure through phased investment'
          ];
          break;
        case 'network':
          specificBenefits = [
            ...specificBenefits,
            '40-60% reduction in network latency for critical applications',
            'Elimination of network bottlenecks and congestion',
            'Improved application performance and user experience',
            'Enhanced network resilience with no single point of failure'
          ];
          break;
        case 'security':
          specificBenefits = [
            ...specificBenefits,
            'Comprehensive protection against unauthorized physical access',
            'Early detection of security threats and environmental issues',
            'Detailed audit trails for compliance and forensic analysis',
            'Reduced risk of data breaches and service disruptions'
          ];
          break;
        case 'monitoring':
          specificBenefits = [
            ...specificBenefits,
            'Real-time visibility into all critical infrastructure components',
            'Early detection of potential issues before they impact service',
            'Data-driven decision making for capacity planning',
            'Reduced mean time to repair (MTTR) for infrastructure issues'
          ];
          break;
      }
    }
    
    return [...new Set([...specificBenefits, ...commonBenefits])];
  };

  const generateTimeline = (selectedChallenges: Challenge[]): string => {
    const challengeCount = selectedChallenges.length;
    
    if (challengeCount === 1) {
      const challenge = selectedChallenges[0];
      
      switch (challenge.id) {
        case 'cooling':
          return '4-6 months from initial assessment to full implementation, with energy savings beginning to accrue within the first month after deployment.';
        case 'power':
          return '6-9 months for complete implementation, with phased deployment to ensure continuous operations throughout the project.';
        case 'scaling':
          return '3-12 months depending on scale, with a phased approach that allows for incremental capacity increases as needed.';
        case 'network':
          return '3-5 months for full implementation, with careful planning to minimize service disruptions during the transition.';
        case 'security':
          return '4-6 months for comprehensive implementation, with critical components deployed within the first 30 days.';
        case 'monitoring':
          return '2-4 months for full deployment, with basic monitoring capabilities available within the first 2 weeks.';
        default:
          return '3-6 months from initial assessment to full implementation, with benefits beginning to accrue within the first month.';
      }
    }
    
    // Multiple challenges
    return `${6 + challengeCount * 2}-${9 + challengeCount * 3} months for comprehensive implementation of all components, with a phased approach prioritizing quick wins and critical improvements early in the project.`;
  };

  const generateROI = (selectedChallenges: Challenge[]): string => {
    const challengeCount = selectedChallenges.length;
    
    if (challengeCount === 1) {
      const challenge = selectedChallenges[0];
      
      switch (challenge.id) {
        case 'cooling':
          return 'Expected ROI within 18-24 months through energy savings of 15-30%, with additional value from improved equipment reliability and extended hardware lifecycles.';
        case 'power':
          return 'Expected ROI within 24-36 months through improved reliability (99.999% uptime), with significant value from avoided downtime costs (estimated at $8,000-$12,000 per minute for critical operations).';
        case 'scaling':
          return 'Expected ROI within 12-18 months through optimized capital expenditure, reduced deployment times, and improved resource utilization.';
        case 'network':
          return 'Expected ROI within 12-24 months through improved application performance, reduced latency, and enhanced user experience, with additional value from avoided downtime.';
        case 'security':
          return 'Expected ROI within 24-36 months through risk reduction, with significant value from avoided security incidents (average cost of $4.35 million per data breach according to industry studies).';
        case 'monitoring':
          return 'Expected ROI within 6-12 months through improved operational efficiency, reduced mean time to repair, and proactive maintenance that extends equipment lifecycles.';
        default:
          return 'Expected ROI within 12-18 months through operational savings, improved efficiency, and reduced risk of costly downtime.';
      }
    }
    
    // Multiple challenges
    return `Expected ROI within ${12 + challengeCount * 3}-${18 + challengeCount * 3} months, with compounding benefits from the integrated approach that addresses multiple challenges simultaneously.`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="case-study-solver" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Interactive <span className="text-primary">Solution</span> Generator
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Select the challenges you're facing, and I'll generate a customized solution based on my experience
            and expertise. This demonstrates how I would approach your specific needs at Skybox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Challenge Selection */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1"
          >
            <div className="card mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Select Your Challenges</h3>
              <p className="text-white/80 mb-6">
                Choose one or more challenges you're currently facing in your data center operations:
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <motion.div
                    key={challenge.id}
                    variants={itemVariants}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      challenge.selected 
                        ? 'border-primary bg-primary/10' 
                        : 'border-gray-700 hover:border-primary/50'
                    }`}
                    onClick={() => toggleChallenge(challenge.id)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl">{challenge.icon}</div>
                      <div>
                        <h4 className="font-medium text-white">{challenge.title}</h4>
                        <p className="text-sm text-white/70">{challenge.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <button
              type="button"
              className="w-full btn-primary flex items-center justify-center"
              onClick={generateSolution}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Loading spinner</title>
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating Solution...
                </>
              ) : (
                <>
                  <FaLightbulb className="mr-2" />
                  Generate Solution
                </>
              )}
            </button>
          </motion.div>
          
          {/* Solution Display */}
          <div className="lg:col-span-2">
            {solution ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">{solution.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-primary mb-2">Overview</h4>
                  <p className="text-white/80">{solution.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-primary mb-2">Implementation Steps</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-white/80">
                    {solution.steps.map((step, i) => (
                      <li key={`step-${i}-${step.substring(0, 10)}`}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-primary mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    {solution.benefits.map((benefit, i) => (
                      <li key={`benefit-${i}-${benefit.substring(0, 10)}`}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-2">Timeline</h4>
                    <p className="text-white/80">{solution.timeline}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-primary mb-2">Return on Investment</h4>
                    <p className="text-white/80">{solution.roi}</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <p className="text-white/90 italic">
                    This solution is based on my experience managing critical infrastructure at T5 Data Centers
                    and can be further customized to meet your specific requirements and constraints.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="card flex flex-col items-center justify-center text-center p-12"
              >
                <FaLightbulb className="text-primary text-5xl mb-6" />
                <h3 className="text-xl font-semibold text-white mb-3">Select a Challenge to Begin</h3>
                <p className="text-white/80">
                  Choose one or more challenges from the left panel, then click "Generate Solution" 
                  to see a personalized approach based on my experience.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySolver; 