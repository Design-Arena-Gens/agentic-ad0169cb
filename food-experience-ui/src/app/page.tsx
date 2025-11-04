import type { ReactNode } from 'react'

type OrderStatus = 'accepted' | 'preparing' | 'ready' | 'enroute' | 'delivered'

type StatusStage = {
  key: OrderStatus
  label: string
}

const statusStages: StatusStage[] = [
  { key: 'accepted', label: 'Accepted' },
  { key: 'preparing', label: 'Preparing' },
  { key: 'ready', label: 'Ready' },
  { key: 'enroute', label: 'On the way' },
  { key: 'delivered', label: 'Enjoy' },
]

const quickActions = [
  { title: 'Book a table', subtitle: 'Tonight', tone: 'from-primary/75 to-primary/40' },
  { title: 'Order for pickup', subtitle: 'Ready in 20', tone: 'from-primary/60 to-primary/20' },
  { title: 'Plan a group', subtitle: 'Curate menus', tone: 'from-primary/50 to-secondary/60' },
]

const trendingSpots = [
  {
    name: 'Ember & Sage',
    category: 'Seasonal plates',
    distance: '0.8 mi',
    rating: '4.8',
    eta: '20–25 min',
    highlights: ['Chef’s tasting', 'Late-night'],
    vibe: 'Smoky + intimate',
  },
  {
    name: 'Nori District',
    category: 'Modern sushi',
    distance: '1.6 mi',
    rating: '4.9',
    eta: '12–18 min',
    highlights: ['Omakase bar', 'Reservations'],
    vibe: 'Minimal + vibrant',
  },
  {
    name: 'Mezcla Verde',
    category: 'Plant-forward',
    distance: '0.5 mi',
    rating: '4.7',
    eta: '25–30 min',
    highlights: ['Organic pantry', 'Chef collab'],
    vibe: 'Fresh + earthy',
  },
]

const curatedExperiences = [
  {
    title: 'Sunset Aperitivo',
    description: 'Signature cocktails, warm tapas, golden-hour seating.',
    slots: 'Open slots: 6',
  },
  {
    title: 'Chef-in-Residence',
    description: 'Pop-up tasting menu from visiting chef Lian Ko.',
    slots: '2 tasting spots left',
  },
  {
    title: 'Morning Market Walk',
    description: 'Guided tour + brunch pairing at the riverside market.',
    slots: 'Weekend waitlist',
  },
]

const discoveryFilters = [
  { label: 'Near me' },
  { label: 'In 20 mins' },
  { label: 'Outdoor' },
  { label: 'Chef series' },
  { label: 'Group friendly' },
]

const quickCategories = [
  { name: 'Express Lunch', detail: '12 curated kitchens' },
  { name: 'Weekend Brunch', detail: '8 playful menus' },
  { name: 'Mixology Labs', detail: 'Craft cocktails & pairings' },
  { name: 'Comfort Classics', detail: 'For the cozy nights' },
]

const savedFavorites = [
  {
    name: 'Bao Society',
    detail: 'Street bao · 10 min pickup',
    mood: 'Bold + bright',
  },
  {
    name: 'Celeste Pasta',
    detail: 'Pasta tasting · table for 2',
    mood: 'Slow dining',
  },
  {
    name: 'Wildflower Bar',
    detail: 'Botanical drinks · book lounge',
    mood: 'Live vinyl',
  },
]

const liveOrders = [
  {
    title: 'Nori District · Takeaway',
    when: 'Today · 18:40 arrival',
    status: 'enroute' as OrderStatus,
    progress: 4,
    note: 'Driver reached lobby',
  },
  {
    title: 'Ember & Sage · Table',
    when: 'Fri · 21:00 for 2 guests',
    status: 'accepted' as OrderStatus,
    progress: 1,
    note: 'Pre-dinner cocktail suggestions ready',
  },
]

const bottomNav = [
  { label: 'Explore', active: true },
  { label: 'Favorites', active: false },
  { label: 'Orders', active: false },
  { label: 'Profile', active: false },
]

const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')

export default function Home() {
  return (
    <main className="min-h-screen pb-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <Header />
        <SearchPanel />
        <section className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="Your evening"
            title="Plan with quick actions"
            subtitle="Tap to jump straight into the flow you need."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {quickActions.map((action) => (
              <QuickActionCard key={action.title} {...action} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="Trending nearby"
            title="Curated picks for speed + delight"
            subtitle="Smartly sorted by time, mood, and favorites."
            actionLabel="See all"
          />
          <div className="grid snap-x grid-cols-1 gap-4 overflow-x-auto pb-1 sm:grid-cols-3 sm:overflow-visible">
            {trendingSpots.map((spot) => (
              <TrendingCard key={spot.name} {...spot} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="Curations"
            title="Limited-run experiences"
            subtitle="Reserve special menus and tastings."
            actionLabel="View calendar"
          />
          <div className="flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {curatedExperiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="Jump back in"
            title="Filters tuned for fast decisions"
            subtitle="Pick a lane, get instant matches."
          />
          <div className="flex flex-wrap gap-2">
            {discoveryFilters.map((filter) => (
              <button
                key={filter.label}
                className="rounded-xl border border-primary/25 bg-surface px-4 py-2 text-sm font-medium text-neutral/80 shadow-soft shadow-primary/5 transition hover:-translate-y-0.5 hover:shadow-ring"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickCategories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="Saved"
            title="Favorites on deck"
            subtitle="Re-order, book again, or share a plan."
            actionLabel="Manage"
          />
          <div className="grid gap-3 lg:grid-cols-3">
            {savedFavorites.map((favorite) => (
              <FavoriteCard key={favorite.name} {...favorite} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="Live activity"
            title="Orders & reservations"
            subtitle="Track progress at a glance."
            actionLabel="Timeline"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {liveOrders.map((order) => (
              <OrderTracker key={order.title} {...order} />
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </main>
  )
}

function Header() {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-primary/10 bg-surface/90 px-4 py-4 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-neutral/60">Tonight in</span>
        <button className="group flex items-baseline gap-2 text-left">
          <span className="font-logo text-2xl lowercase tracking-wide text-primary">
            Plateful
          </span>
          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary group-hover:bg-primary/15">
            Downtown
          </span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative rounded-xl border border-primary/10 bg-surface px-3 py-3 shadow-soft shadow-primary/10">
          <span className="sr-only">Notifications</span>
          <BellIcon className="h-5 w-5 text-primary" />
          <span className="absolute right-2 top-2 block h-2.5 w-2.5 rounded-full bg-primary" />
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-sm font-semibold text-primary shadow-soft shadow-primary/5">
          ME
        </button>
      </div>
    </header>
  )
}

function SearchPanel() {
  return (
    <section className="space-y-4 rounded-3xl border border-primary/10 bg-surface/95 p-5 shadow-soft backdrop-blur">
      <div className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-background px-4 py-3 shadow-inner shadow-primary/10">
        <SearchIcon className="h-5 w-5 text-primary" />
        <div className="flex flex-1 flex-col">
          <span className="text-xs font-medium uppercase tracking-wide text-neutral/60">
            Discover
          </span>
          <input
            className="mt-1 w-full border-none bg-transparent text-base font-semibold text-neutral outline-none placeholder:text-neutral/40"
            placeholder="Sushi, atmosphere, chef..."
          />
        </div>
        <button className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-surface shadow-soft shadow-primary/20">
          Go
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <FilterChip icon={<ClockIcon />} label="Ready in 15" />
        <FilterChip icon={<StarIcon />} label="Top rated" />
        <FilterChip icon={<FlameIcon />} label="New drops" />
        <FilterChip icon={<LeafIcon />} label="Fresh picks" />
      </div>
      <div className="rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/12 to-secondary/30 px-4 py-5 shadow-soft shadow-primary/10">
        <p className="text-sm font-medium text-neutral/70">
          Today’s pulse ·{' '}
          <span className="font-semibold text-primary">Chef Lian Ko</span> is
          hosting a midnight ramen lab at{' '}
          <span className="underline decoration-primary/40 underline-offset-4">
            Nori District
          </span>
          .
        </p>
      </div>
    </section>
  )
}

function QuickActionCard({
  title,
  subtitle,
  tone,
}: {
  title: string
  subtitle: string
  tone: string
}) {
  return (
    <button className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-surface p-5 text-left shadow-soft transition hover:-translate-y-0.5 hover:shadow-ring">
      <div
        className={cn(
          'absolute inset-0 -z-10 bg-gradient-to-br opacity-80 transition group-hover:opacity-100',
          tone,
        )}
      />
      <span className="text-sm font-medium uppercase tracking-wide text-neutral/60">
        {subtitle}
      </span>
      <h3 className="mt-2 text-2xl font-semibold text-neutral">{title}</h3>
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
        Start flow
        <ArrowIcon className="h-4 w-4" />
      </div>
    </button>
  )
}

function TrendingCard({
  name,
  category,
  distance,
  rating,
  eta,
  highlights,
  vibe,
}: {
  name: string
  category: string
  distance: string
  rating: string
  eta: string
  highlights: string[]
  vibe: string
}) {
  return (
    <article className="flex min-w-[260px] flex-col gap-4 rounded-3xl border border-primary/12 bg-surface/95 p-5 shadow-soft backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-ring sm:min-w-0">
      <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-secondary/40 to-primary/10 p-4 text-sm font-medium text-neutral/70 shadow-soft">
        {vibe}
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold text-neutral">{name}</h3>
          <p className="text-sm text-neutral/70">{category}</p>
        </div>
        <div className="rounded-xl bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {rating}
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm text-neutral/70">
        <span className="flex items-center gap-1">
          <ClockIcon className="h-4 w-4 text-primary" />
          {eta}
        </span>
        <span className="flex items-center gap-1">
          <LocationIcon className="h-4 w-4 text-primary" />
          {distance}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-medium">
        {highlights.map((item) => (
          <span
            key={item}
            className="rounded-full bg-primary/10 px-3 py-1 text-primary"
          >
            {item}
          </span>
        ))}
      </div>
      <button className="flex items-center justify-between rounded-2xl border border-primary/15 bg-primary px-4 py-3 text-sm font-semibold text-surface shadow-soft shadow-primary/20 transition hover:opacity-90">
        View menu
        <ArrowIcon className="h-4 w-4 text-surface" />
      </button>
    </article>
  )
}

function ExperienceCard({
  title,
  description,
  slots,
}: {
  title: string
  description: string
  slots: string
}) {
  return (
    <article className="flex min-w-[240px] flex-col gap-3 rounded-3xl border border-primary/12 bg-surface/95 p-5 shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-ring">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
          Limited
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-neutral/50">
          Spotlight
        </span>
      </div>
      <h3 className="text-lg font-semibold text-neutral">{title}</h3>
      <p className="text-sm text-neutral/70">{description}</p>
      <div className="flex items-center justify-between pt-1 text-sm font-medium">
        <span className="text-primary">{slots}</span>
        <button className="rounded-xl border border-primary/20 px-3 py-1 text-sm font-semibold text-primary">
          Reserve
        </button>
      </div>
    </article>
  )
}

function CategoryCard({ name, detail }: { name: string; detail: string }) {
  return (
    <article className="group flex items-start justify-between gap-3 rounded-3xl border border-primary/12 bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-ring">
      <div>
        <h3 className="text-lg font-semibold text-neutral">{name}</h3>
        <p className="mt-1 text-sm text-neutral/70">{detail}</p>
      </div>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition group-hover:bg-primary group-hover:text-surface">
        Open
      </span>
    </article>
  )
}

function FavoriteCard({
  name,
  detail,
  mood,
}: {
  name: string
  detail: string
  mood: string
}) {
  return (
    <article className="flex flex-col gap-3 rounded-3xl border border-primary/12 bg-surface/95 p-5 shadow-soft backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral">{name}</h3>
        <button className="rounded-lg border border-primary/15 bg-background px-3 py-1 text-xs font-semibold text-primary">
          Quick order
        </button>
      </div>
      <p className="text-sm text-neutral/70">{detail}</p>
      <div className="flex items-center justify-between text-xs text-neutral/60">
        <span>{mood}</span>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-primary/10 px-3 py-1 text-primary">
            Save
          </button>
          <button className="rounded-full bg-primary/10 px-3 py-1 text-primary">
            Share
          </button>
        </div>
      </div>
    </article>
  )
}

function OrderTracker({
  title,
  when,
  status,
  progress,
  note,
}: {
  title: string
  when: string
  status: OrderStatus
  progress: number
  note: string
}) {
  return (
    <article className="space-y-4 rounded-3xl border border-primary/12 bg-surface/95 p-5 shadow-soft backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral">{title}</h3>
          <p className="text-sm text-neutral/70">{when}</p>
        </div>
        <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {status}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-neutral/60">
        {statusStages.map((stage, index) => (
          <div key={stage.key} className="flex flex-1 items-center gap-2">
            <div
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-[10px]',
                index < progress
                  ? 'bg-primary text-surface shadow-soft shadow-primary/30'
                  : 'bg-background text-neutral/40',
              )}
            >
              {index + 1}
            </div>
            {index < statusStages.length - 1 && (
              <div
                className={cn(
                  'h-0.5 flex-1 rounded-full bg-primary/20',
                  index < progress - 1 && 'bg-primary',
                )}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-2xl border border-primary/15 bg-background px-4 py-3 text-sm text-neutral/70">
        <span>{note}</span>
        <button className="rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-surface shadow-soft shadow-primary/20">
          Details
        </button>
      </div>
    </article>
  )
}

function FilterChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-2 rounded-xl border border-primary/15 bg-background px-3 py-2 text-sm font-medium text-neutral/80 shadow-soft shadow-primary/5 transition hover:-translate-y-0.5 hover:shadow-ring">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      {label}
    </button>
  )
}

function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-5 mx-auto flex w-[min(450px,92%)] items-center justify-between rounded-3xl border border-primary/12 bg-surface/95 px-5 py-3 shadow-soft backdrop-blur">
      {bottomNav.map((item) => (
        <button
          key={item.label}
          className={cn(
            'flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium transition',
            item.active
              ? 'bg-primary/15 text-primary shadow-soft shadow-primary/10'
              : 'text-neutral/60 hover:text-primary',
          )}
        >
          <span className="h-4 w-4 rounded-full bg-primary/20" />
          {item.label}
        </button>
      ))}
    </nav>
  )
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  actionLabel,
}: {
  eyebrow: string
  title: string
  subtitle: string
  actionLabel?: string
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-primary/80">
          {eyebrow}
        </span>
        <h2 className="text-2xl font-semibold text-neutral sm:text-3xl">{title}</h2>
        <p className="text-sm text-neutral/70 sm:text-base">{subtitle}</p>
      </div>
      {actionLabel && (
        <button className="self-start rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-soft shadow-primary/5 sm:self-end">
          {actionLabel}
        </button>
      )}
    </div>
  )
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.5c-3.1 0-5 2.16-5 5.41v2.17c0 .6-.17 1.18-.5 1.68l-.85 1.28c-.84 1.26-.25 2.96 1.2 3.34a40.2 40.2 0 0 0 10.1 0c1.45-.38 2.04-2.08 1.2-3.34l-.85-1.28c-.33-.5-.5-1.08-.5-1.68V8.91c0-3.25-1.9-5.41-5-5.41Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 19a2.5 2.5 0 0 1-5 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        r="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m13.5 13.5 3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6.5V10l2 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m10 3.5 1.47 3.46 3.78.3-2.86 2.52.86 3.71L10 11.7l-3.25 1.79.86-3.71-2.86-2.52 3.78-.3L10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 3.5c.5 2 1.5 3.5 3 4.5 1-.5 1.5-1.6 1.5-3.3 1.6 1.4 2.5 3.5 2.5 5.8A5.5 5.5 0 0 1 10 16.5c-3 0-5.5-2.35-5.5-5.2 0-2.1 1-4 2.6-5.4-.2 1-.1 2 .4 2.9 1-.8 1.7-1.86 2-3.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.5c.75.6 1.2 1.25 1.2 2 0 .9-.8 1.7-1.7 1.7s-1.7-.8-1.7-1.7c0-1 .7-1.8 2.2-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4.5c-4.5 0-8.5 2.5-9.5 6.5-.5 1.9.5 4 2.4 4.5.6.2 1.2.2 1.8 0 4-1.1 6.6-5 5.3-11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.5c.5-3 2.5-6 5.5-7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M5 6.5c-1.5 1-2.5 2.8-2.5 4.7 0 2.2 1.4 4.1 3.5 4.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.5c-2.5 0-4.5 2-4.5 4.5 0 3.2 3.4 6.9 4 7.5.3.3.7.3 1 0 .6-.6 4-4.3 4-7.5 0-2.5-2-4.5-4.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="10" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="m9.5 5.5 2.5 2.5-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
