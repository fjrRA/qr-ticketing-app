// src/app/user/page.tsx
'use client';

import HeroSection from '@/components/user/homepage/HeroSection';
import NewSpotSection from '@/components/user/homepage/NewSpotSection';
import TodayScheduleSection from '@/components/user/homepage/TodayScheduleSection';
import PopularSpotSection from '@/components/user/homepage/PopularSpotSection';
import ExplorationMapSelection from '@/components/user/homepage/ExplorationMapSection';

export default function HomepageUser() {
  return (
    <main className="min-h-screen">
      <section>
        <HeroSection />
      </section>

      <section>
        <NewSpotSection />
      </section>

      <section>
        <TodayScheduleSection />
      </section>

      <section>
        <PopularSpotSection />
      </section>

      <section>
        <ExplorationMapSelection />
      </section>
    </main>
  );
}

