import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const titleMap: Record<string, string> = {
    "kazakhstan-must-visit": "Kazakhstan - Must Visit Places & Hidden Gems - Nomad Network",
    "darjeeling-must-visit": "Darjeeling - Tea, Mountains & Colonial Charm - Nomad Network",
    "gangtok-must-visit": "Gangtok - Himalayan Beauty & Spiritual Culture - Nomad Network",
    "goa-beyond-beaches": "Goa - Beyond the Beaches: Must-Visit Places - Nomad Network",
    "nepal-mountains": "Nepal - Mountains, Spirituality & Unforgettable Experiences - Nomad Network",
  }

  return {
    title: titleMap[slug] || "Travel Story - Nomad Network",
    description: "Read my authentic travel stories and experiences",
  }
}

const travelContent: Record<
  string,
  {
    title: string
    location: string
    date: string
    content: string
    youtubeId?: string
  }
> = {
  "kazakhstan-must-visit": {
    title: "Kazakhstan - Must Visit Places & Hidden Gems",
    location: "Kazakhstan",
    date: "2023",
    content: `
I traveled to Kazakhstan and discovered a country of incredible diversity, from modern cities to vast natural landscapes. Here are the must-visit places and experiences.

## Almaty - The Cultural Heart

Almaty is where you should base yourself to explore the region. The city combines Soviet architecture with modern development, creating a unique aesthetic.

### Must-Do in Almaty:
- **Turgen Gorge**: Stunning mountain scenery just outside the city. Perfect for day hikes with incredible views.
- **Big Almaty Lake**: A day trip that rewards you with turquoise waters surrounded by mountains.
- **Charyn Canyon**: Often compared to the Grand Canyon but less touristy. The rock formations are otherworldly.
- **Local Food Scene**: Try Kazakh plov, shashlik, and fresh bread from local vendors.
- **Markets**: Zeleny Bazaar offers authentic local produce and crafts.

## The Steppes Experience

Kazakhstan's steppes are vast and seemingly endless. This is where you truly feel the scale of the landscape.

### Activities:
- Horseback riding across the steppes
- Visit nomadic communities (if respectful tour options available)
- Photography opportunities at sunrise and sunset

## Astana (Nur-Sultan)

The capital showcases modern architecture and ambitious city planning. While newer and less charming than Almaty, it's worth a visit to see Kazakhstan's future being built.

### Must-See:
- Bayterek Monument: Iconic modern structure with city views
- National Museum: Understand Kazakhstan's history and culture
- Modern Parks and Gardens: Clean, well-designed public spaces

## Practical Travel Tips

- **Best Time to Visit**: May-September for pleasant weather
- **Getting Around**: Hire a driver or join organized tours for mountain areas
- **Language**: Kazakh and Russian are spoken; English is limited
- **Food**: Try local cuisine—it's hearty and delicious
- **Accommodation**: Almaty has good mid-range options; book in advance

## Why You Should Go

Kazakhstan exceeded my expectations. It offers unique experiences that go beyond typical tourist routes. The hospitality, natural beauty, and cultural richness make it a worthwhile destination. If you're considering Central Asia travel, Kazakhstan should be on your list.
    `,
  },
  "darjeeling-must-visit": {
    title: "Darjeeling - Tea, Mountains & Colonial Charm",
    location: "Darjeeling, West Bengal, India",
    date: "2023",
    content: `
Darjeeling is one of India's most enchanting destinations, famous for its tea gardens, colonial heritage, and mountain views. Here's your guide to the must-visit places and experiences.

## The Tea Gardens

Walking through the terraced tea gardens at sunrise, watching workers pick leaves with practiced precision, is to witness centuries of tradition in action.

### Must-Do:
- **Makaibari Tea Estate**: One of the oldest operating tea estates; offers factory tours
- **Margaret's Hope Tea Estate**: Beautiful estate with excellent views
- **Tea Tasting**: Sample authentic Darjeeling tea directly from the source
- **Sunrise in the Gardens**: Magical experience with mist and mountains

## Iconic Attractions

### The Darjeeling Himalayan Railway (Toy Train)
The narrow-gauge railway is an icon. The slow ride through tea gardens and valleys offers incredible views. It's touristy but worth experiencing at least once.

### Tiger Hill
Watch the sunrise over Kanchenjunga from Tiger Hill. On clear days, you can see the mountain peak—the third-highest in the world.

### Batasia Loop
A scenic train loop offering panoramic views of the surrounding landscape and Kanchenjunga.

## Cultural Experiences

### Local Markets
The bustling markets (Main Bazaar, Nehru Road) offer local crafts, fresh produce, and authentic street food.

### Monasteries
Bhutia Monastery and other local temples provide insight into Buddhist culture and architecture.

### Local Community
Spend time with locals. Tea garden workers, shopkeepers, and travelers have fascinating stories about life in Darjeeling.

## Food Scene

Darjeeling's food reflects its unique culture:
- **Momos**: Local dumplings available everywhere
- **Thukpa**: Noodle soup—perfect for the cool mountain climate
- **Local Cheese**: Darjeeling produces excellent local cheese
- **Fresh Produce**: Strawberries, vegetables from local farms

## Practical Travel Tips

- **Best Time to Visit**: March-May (spring) and September-November (autumn)
- **Getting Around**: Local buses and taxis; cable cars for some areas
- **Language**: Bengali and English spoken; some locals speak Hindi
- **Accommodation**: Stay in the town center for easy access to attractions
- **Budget**: Moderate; good mid-range guesthouses available

## Why Darjeeling is Special

Darjeeling combines natural beauty, cultural richness, and historical significance. The tea industry heritage, colonial architecture, and mountain setting create a unique atmosphere. Whether you're interested in tea, nature, culture, or simply relaxation, Darjeeling delivers.

## Recommendation

Spend at least 3-4 days in Darjeeling to experience it properly. Take the tea estate tours, watch the sunrise from Tiger Hill, and spend time with locals. This is India at its most charming.
    `,
  },
  "gangtok-must-visit": {
    title: "Gangtok - Himalayan Beauty & Spiritual Culture",
    location: "Gangtok, Sikkim, India",
    date: "2023",
    content: `
Gangtok, the capital of Sikkim, sits high in the Himalayas and offers a unique blend of spiritual, cultural, and natural experiences. Here are the must-visit places.

## Spiritual Centers

### Rumtek Monastery
One of the most important Tibetan Buddhist monasteries outside Tibet. The architecture is stunning, and the spiritual energy is palpable. Respectfully observe the monks during prayer sessions.

### Monasteries Around Gangtok
Multiple smaller monasteries offer peaceful retreat experiences and insight into Buddhist practice.

### Meditation Centers
Several centers offer meditation and yoga classes for visitors.

## Natural Beauty

### Kanchenjunga View Points
On clear days, you can see Kanchenjunga (third-highest mountain in the world). The views are breathtaking.

### Natural Trails
Hiking trails around Gangtok offer pristine nature and minimal tourist crowds. The biodiversity is remarkable.

### Tsomgo Lake
A scenic glacial lake about an hour from Gangtok. The drive through forests is beautiful, and the lake itself is serene.

## Cultural Experiences

### Local Markets
Visit local markets to experience daily life and find traditional crafts and fresh produce.

### Traditional Sikkimese Food
Try momos, thukpa, and other local specialties. The cuisine reflects Tibetan and local influences.

### Indigenous Communities
Sikkim has indigenous communities (Lepcha, Limbu) with distinct cultures. Respectful engagement offers deep cultural understanding.

## Unique Attractions

### MG Marg
The pedestrian street in central Gangtok with shops, cafes, and local vendors.

### Flower Exhibitions
Sikkim's flower gardens and nurseries showcase incredible biodiversity.

### Organic Farms
Sikkim's organic farming commitment means fresh, pesticide-free produce everywhere.

## Practical Travel Tips

- **Best Time to Visit**: March-May and September-November for clear weather
- **Getting Around**: Local taxis and buses; hire a driver for convenience
- **Language**: Sikkimese, Nepali, and English spoken
- **Accommodation**: Mid-range options available; book in advance during peak season
- **Food**: Vegetarian options abundant; respect local customs

## Why Gangtok is Special

Gangtok combines spiritual depth, natural beauty, and cultural richness. The commitment to preserving traditions and environment is evident everywhere. The pace is slower, allowing for genuine reflection and connection.

## Recommendation

Spend 3-4 days exploring Gangtok and surrounding areas. Visit monasteries, hike natural trails, and engage with local communities respectfully. This is a place for reflection and genuine cultural exchange.
    `,
  },
  "goa-beyond-beaches": {
    title: "Goa - Beyond the Beaches: Must-Visit Places",
    location: "Goa, India",
    date: "2023",
    content: `
Goa is famous for beaches and parties, but there's much more to discover. Here's your guide to the real Goa beyond the typical tourist areas.

## Historical & Cultural Sites

### Old Goa
The historical center showcases Portuguese colonial architecture and churches:
- **Basilica of Bom Jesus**: UNESCO world heritage site with stunning architecture
- **Se Cathedral**: One of Asia's largest churches
- **Colonial Buildings**: Step back in time exploring old Portuguese structures

### Local Heritage
Goa's unique blend of Indian, Portuguese, and African influences is evident in architecture, food, and culture.

## Natural Beauty Beyond Beaches

### Backwaters & Rivers
Kayaking through Goa's backwaters is serene and offers a different perspective on the landscape.

### Lesser-Known Beaches
- **Palolem Beach**: Less touristy than famous beaches; beautiful crescent shape
- **Agonda Beach**: Peaceful, perfect for relaxation
- **Kerim Beach**: Quieter alternative with river views

### Jungle Treks
Explore Goa's interior for waterfalls, wildlife, and dense forests.

## Authentic Food Experience

Goan cuisine is distinct and delicious:
- **Fish Curry with Rice**: The local staple—absolute must-try
- **Prawn Dishes**: Fresh seafood prepared in coconut-based curries
- **Coconut-Based Curries**: Unique flavor profile
- **Local Bakeries**: Fresh bread and pastries from Portuguese heritage
- **Street Food**: Pav bhaji, local snacks at markets

### Recommended:
- Eat at family-run restaurants, not touristy beach shacks
- Visit local markets for fresh produce
- Join cooking classes to learn authentic recipes

## Cultural Experiences

### Local Communities
Spend time with locals in non-touristy areas. Their perspectives on life, history, and culture are invaluable.

### Markets
Morning visits to local markets show you daily life and authentic Goa.

### Festivals & Events
If timing aligns, experience local festivals (Carnival, Church festivals).

## Art & Craft

### Local Artisans
Support local crafts by buying directly from makers—textiles, woodwork, ceramics.

### Art Galleries & Studios
Emerging artist community creating modern work with traditional influences.

## Practical Travel Tips

- **Best Time to Visit**: October-March for pleasant weather
- **Getting Around**: Rent a scooter or hire a driver
- **Language**: Konkani, Marathi, Hindi, English spoken
- **Accommodation**: Avoid main beaches; explore quieter areas
- **Budget**: Inexpensive once you move away from touristy areas

## Why Real Goa is Special

Goa's authentic culture, blended heritage, and natural beauty are exceptional. Moving beyond tourist areas reveals a place with depth, history, and genuine warmth.

## Recommendation

Spend time exploring Old Goa, eat at local restaurants, hire a scooter and discover small villages, and engage with communities respectfully. The real Goa is worth far more effort than just beach relaxation.
    `,
  },
  "nepal-mountains": {
    title: "Nepal - Mountains, Spirituality & Unforgettable Experiences",
    location: "Nepal",
    date: "2023",
    content: `
Nepal is defined by mountains, spirituality, and a culture of warmth and resilience. Here are the must-visit places and experiences.

## Mountain Experiences

### Trekking Options

**Everest Base Camp Trek**: 
- Classic trek attracting adventurers worldwide
- 12-14 days typically
- Challenging but rewarding
- Views of Everest and surrounding peaks

**Annapurna Circuit**:
- Diverse landscape from valleys to high altitude
- 16-21 days depending on route
- Less crowded than Everest trek
- Stunning views of Annapurna range

**Shorter Treks**:
- **Langtang Valley**: 7 days, less crowded
- **Helambu Trek**: 5-6 days, closer to Kathmandu
- Perfect for those with limited time

### Trekking Tips:
- Hire local guides—support the community
- Acclimatize properly to avoid altitude sickness
- Best seasons: Spring (March-May) and Autumn (September-November)
- Teahouse trekking offers authentic local hospitality

## Spiritual Centers

### Kathmandu Valley

**Pashupatinath Temple**: 
- UNESCO world heritage site
- Major Hindu pilgrimage center
- Spiritual energy is palpable

**Boudhanath Stupa**:
- Massive Buddhist stupa
- Center of Tibetan Buddhist culture
- Circumambulate the stupa with locals

**Swayambhunath (Monkey Temple)**:
- Ancient temple complex
- Panoramic views over Kathmandu Valley

### Pokhara
- More relaxed than Kathmandu
- Meditation and yoga centers
- Lake Fewa with mountain backdrop

## Cultural Richness

### Local Markets
Experience daily life at Kathmandu markets—chaos, colors, and authenticity.

### Traditional Crafts
- **Thangka Paintings**: Tibetan Buddhist religious art
- **Pottery**: Traditional Nepali ceramics
- **Textiles**: Handwoven fabrics

### Local Cuisine
- **Momos**: The national dish—dumplings in various styles
- **Dhal Bhat**: Lentil rice—staple food
- **Samosas**: Fried pastry snacks
- **Newari Cuisine**: Kathmandu's unique culinary tradition

## Natural Beauty

### Lakes & Valleys
- **Phewa Lake**: Serene setting, mountain views
- **Pokhara Valley**: Peaceful alternative to Kathmandu

### National Parks
- **Chitwan National Park**: Wildlife reserve with tigers, rhinos, elephants
- **Sagarmatha National Park**: Home to Mount Everest

## Practical Travel Tips

- **Best Time to Visit**: March-May (spring) and September-November (autumn)
- **Getting Around**: Buses, domestic flights, local transport
- **Language**: Nepali is primary; English widely spoken in tourist areas
- **Budget**: Very affordable; good budget accommodation available
- **Altitude**: Altitude sickness is real—acclimatize properly

## Why Nepal is Special

Nepal's combination of world-class mountain trekking, spiritual depth, cultural richness, and genuine hospitality is unmatched. Nepalis are known for warmth and resilience—these qualities permeate every interaction.

## Recommendation

Spend at least 2-3 weeks in Nepal. Do a trek, visit spiritual centers, engage with communities, and simply experience the mountain culture. This is travel at its most enriching.
    `,
  },
}

export default async function TravelDetail({ params }: PageProps) {
  const { slug } = await params
  const content = travelContent[slug]

  if (!content) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Travel Story Not Found</h1>
        <Link href="/travel" className="text-accent hover:underline">
          Back to Travel
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Link href="/travel" className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Travel
        </Link>

        <article className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">{content.title}</h1>
            <div className="flex items-center gap-4 text-foreground/60">
              <span>{content.location}</span>
              <span>•</span>
              <span>{content.date}</span>
            </div>
          </div>

          {content.youtubeId && (
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${content.youtubeId}`}
                title={content.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}

          <div className="prose prose-invert max-w-none prose-headings:text-primary prose-a:text-accent">
            <div
              dangerouslySetInnerHTML={{
                __html: content.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("## ")) {
                      return `<h2>${line.substring(3)}</h2>`
                    }
                    if (line.startsWith("### ")) {
                      return `<h3>${line.substring(4)}</h3>`
                    }
                    if (line.trim()) {
                      return `<p>${line}</p>`
                    }
                    return ""
                  })
                  .join(""),
              }}
              className="space-y-4 text-foreground/80 leading-relaxed"
            />
          </div>
        </article>
      </div>
    </div>
  )
}
