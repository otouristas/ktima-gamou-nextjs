import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function ReviewsEn() {
  const reviews = [
    {
      name: "Dimitra Arm",
      rating: 5,
      type: "Wedding",
      text: "Writing this review hours after our amazing wedding. Thank you so much from the bottom of my heart! Everything was better than we had planned together! The food was wonderful, communication was impeccable and everyone was satisfied! Huge thank you to you for helping us organize a wedding beyond every expectation from the very beginning. Professional and above all human! A big thank you to your DJ collaborator Thanos who was exactly what this party needed! He kept the mood lit until the last minute! Thank you to your wonderful lighting technician and another big thank you to our maitre Paul! You were wonderful company. You were part of the most beautiful day of our lives!"
    },
    {
      name: "Dr Noni Pantoleon",
      rating: 5,
      type: "Wedding",
      text: "Guests at an autumn wedding dinner. After a beautiful seaside wedding ceremony we didn't expect what we saw... a magically lit fairytale estate, with excellent music and service and flavors you rarely encounter. We were fortunate to experience it! Congratulations!"
    },
    {
      name: "Eleftheria Papadopoulou",
      rating: 5,
      type: "Wedding",
      text: "We got married at the seaside chapel of Prophet Elias Thorikou 27/9/25. The estate is very close from there, we found it by chance and from the first moment we were conquered by Mrs. Giota's kindness and the green space. Mrs. Giota has made the best catering choice PLEIADES. We thank everyone publicly for the result!"
    },
    {
      name: "dionisia tachtiki",
      rating: 5,
      type: "Wedding",
      text: "Excellent cooperation and care of the venue and reception! We experienced the most beautiful party of our lives at our wedding, with very good food, wonderful music and atmosphere and above all with genuine people to guide us with professionalism and great passion!"
    },
    {
      name: "Konstantinos Pasxalis",
      rating: 5,
      type: "Wedding",
      text: "Beautiful and very well-maintained estate, with very nice decoration and amazing organization. We had a wonderful time. Mrs. Giota is very kind!"
    },
    {
      name: "Iosif Chrysafis",
      rating: 5,
      type: "Wedding",
      text: "I was honestly impressed by both the venue and the staff, who were very polite and always available. A truly well-organized estate, ideal for special moments!"
    },
    {
      name: "Athina Fasogiannh",
      rating: 5,
      type: "Wedding",
      text: "I recently attended a wedding of a relative and was truly thrilled by the whole experience! Impeccable organization and wonderful indoor space when the reception was moved. I recommend it unreservedly!"
    },
    {
      name: "Vasiliki Bekri",
      rating: 5,
      type: "Wedding",
      text: "We would like to express our thanks for the wedding we held last Saturday at the estate and we are absolutely satisfied. The venue was simple but extremely romantic, clean and tasteful, truly the wedding scenery was very beautiful. The food was simply excellent! The PLEIADES catering exceeded every expectation, our guests are still talking about how delicious all the dishes were. Thanos kept the dance floor full with his music until the end with great mood and dancing. Mr. Michalis at the bar deserves many congratulations as he served 260 people alone, with a smile and professionally without any delay. I also want to thank Mrs. Giota for her cooperation and contribution throughout the preparation and the evening! We thank you all from the heart for making this evening so special!"
    },
    {
      name: "Nicole Bellos",
      rating: 5,
      type: "Wedding",
      text: "The place we chose for our wedding was Ktima Orion. We, our families and our friends were ABSOLUTELY satisfied. Mrs. Giota's professionalism and cooperation with her was unique. She treated us excellently and made us feel like we were family. The maitre and waiters were very polite and very helpful. DJ Nikos Avramopoulos on music coverage and Damianos Alatzas on special effects were AMAZING and we had impeccable cooperation and everything we had in mind they made even more perfect. The estate's space was incredible. Everything harmoniously connected and made our night magical. As for the food, it was WONDERFUL, VERY TASTY and none of us had complaints. We recommend it unreservedly. Thank you all very much for everything you did for us to make this unique evening special!"
    },
    {
      name: "Sofia Misikoglou",
      rating: 5,
      type: "Wedding & Baptism",
      text: "We organized our wedding and our son's baptism at the estate. We were so satisfied as well as our guests that even months later they talk about our wedding and the estate. Wonderful food, fantastic estate...Mrs. Giota helped us get through the darkness of corona and have our wedding as we dreamed. I recommend it unreservedly. Giannis, Sofia, Odysseas"
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read what our clients say about their experiences at Ktima Orion. 
              Their words are our greatest pride and motivation.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-main/20 to-brand-main/10 rounded-full flex items-center justify-center">
                          <Quote className="w-6 h-6 text-brand-main" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-brand-text">{review.name}</h3>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-brand-main text-brand-main" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">• {review.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be part of our story
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to create unforgettable memories together 
              that you will want to relive again and again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="button button4">
                BOOK APPOINTMENT
              </button>
              <button className="button button4">
                CONTACT
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}