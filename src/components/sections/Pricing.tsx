import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { PRICING_TIERS } from '@/constants/pricing';
import { PricingTier } from '@/types';

interface PricingProps {
  onSelectPlan: (tierId: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pilih Paket yang{' '}
            <span className="gradient-text">Tepat untuk Bisnis Anda</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mulai dari paket Basic hingga Entrepreneur, kami menyediakan solusi yang sesuai 
            dengan kebutuhan dan skala bisnis Anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <Card
              key={tier.id}
              className={`relative hover-lift flex flex-col ${
                tier.isPopular 
                  ? 'border-blue-500 shadow-xl scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Paling Populer
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Paket {tier.level}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">/bulan</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button
                  onClick={() => onSelectPlan(tier.id)}
                  variant={tier.isPopular ? 'default' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {tier.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Semua paket termasuk 14 hari trial gratis
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Tidak ada setup fee
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Cancel kapan saja
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Data aman & terenkripsi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;