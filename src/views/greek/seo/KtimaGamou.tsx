import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Heart, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';

export default function KtimaGamou() {
    const features = [
        { icon: MapPin, title: "Θέα Θάλασσα", description: "Μοναδική θαλασσινή ατμόσφαιρα με πανοραμική θέα στο Αιγαίο" },
        { icon: Home, title: "Αποκλειστική Χρήση", description: "Ολόκληρο το κτήμα μόνο για εσάς - μία εκδήλωση την ημέρα" },
        { icon: Users, title: "50-350 Άτομα", description: "Ευέλικτες διαρρυθμίσεις για μικρούς και μεγάλους γάμους" },
        { icon: Car, title: "Δωρεάν Parking 100+ Θέσεις", description: "Τεράστιος χώρος στάθμευσης για όλους τους καλεσμένους" },
        { icon: Church, title: "Κοντινά Εκκλησάκια", description: "Παραθαλάσσιοι ναοί σε απόσταση 5-15 λεπτά" },
        { icon: Camera, title: "Φωτογενικό Περιβάλλον", description: "Υπέροχα σκηνικά για αξέχαστες φωτογραφίες γάμου" }
    ];

    const faqs = [
        { question: "Πόσο κοστίζει ένας γάμος στο Κτήμα Ωρίων;", answer: "Το κόστος εξαρτάται από αριθμό καλεσμένων, μενού, ημέρα (Σάββατο έναντι καθημερινής) και πρόσθετες παροχές. Για ενδεικτικά εύρη δείτε το άρθρο «Κόστος γάμου σε κτήμα 2026» στο blog μας· για ακριβή προσφορά επικοινωνήστε ή συμπληρώστε τη φόρμα αιτήματος στο ktimaorion.gr/request." },
        { question: "Πόσα άτομα μπορεί να φιλοξενήσει το Κτήμα Ωρίων για γάμο;", answer: "Φιλοξενούμε γάμους από περίπου 50 έως 350 άτομα, με ευέλικτες διατάξεις για μικρότερους γάμους και micro wedding. Υπάρχουν επιλογές εσωτερικού και εξωτερικού χώρου." },
        { question: "Υπάρχει εκκλησάκι ή κοντινές εκκλησίες για το μυστήριο;", answer: "Κοντά στο κτήμα υπάρχουν πολλά γραφικά εκκλησάκια (συνήθως 5–15 λεπτά με αυτοκίνητο), όπως Άγιος Αλέξανδρος Δασκαλειό, Παναγία Γκαρικά, Προφήτης Ηλίας Θορικό και άλλα. Δείτε λεπτομέρειες στη σελίδα εκκλησιών." },
        { question: "Τι συμβαίνει σε περίπτωση κακοκαιρίας;", answer: "Έχουμε πλήρως κλιματιζόμενη αίθουσα και εναλλακτικές διατάξεις ώστε η δεξίωση να συνεχίζεται άνετα. Η ομάδα μας βοηθά στο plan B χωρίς να χαθεί η ατμόσφαιρα της βραδιάς." },
        { question: "Προσφέρετε δοκιμαστικό μενού για γάμο;", answer: "Ναι, οργανώνουμε γευσιγνωσία/δοκιμαστικό μενού κατόπιν ραντεβού, ώστε να επιλέξετε πιάτα και στυλ σερβιρίσματος πριν την οριστική κράτηση." },
        { question: "Υπάρχει χώρος στάθμευσης;", answer: "Διαθέτουμε δωρεάν parking με πάνω από 100 θέσεις για τους καλεσμένους σας." },
        { question: "Πόσο νωρίς πρέπει να κλείσω κτήμα για γάμο;", answer: "Για Σάββατα και δημοφιλείς μήνες συνιστούμε 10–18 μήνες νωρίτερα· για καθημερινές ή χειμερινές ημερομηνίες συχνά αρκούν λιγότεροι μήνες." },
        { question: "Μπορώ να επισκεφθώ το κτήμα;", answer: "Ναι. Καλέστε στο 22990 68812 ή στείλτε αίτημα μέσω της φόρμας για δωρεάν ξενάγηση." }
    ];

    return (
        <Layout>
            <div className="pt-20">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
                    <div className="container-max text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-gradient-brand">Κτήμα γάμου για μοναδικές δεξιώσεις</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                            Ρομαντικό κτήμα γάμου στην Ανατολική Αττική (Κερατέα), κοντά στην Αθήνα, με θέα θάλασσα και ολοκληρωμένες παροχές για τη δεξίωσή σας
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Ιδανικό για 50-350 άτομα • Δωρεάν parking 100+ θέσεις • 8 κοντινά εκκλησάκια
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/request">
                                <button className="button button4">
                                    Ζητήστε προσφορά
                                </button>
                            </Link>
                            <Link href="/epikoinonia">
                                <button className="button button4">
                                    Κλείστε δωρεάν επίσκεψη
                                </button>
                            </Link>
                            <a href="tel:+302299068812">
                                <button className="button button4">
                                    <Phone className="w-5 h-5 inline mr-2" />
                                    22990 68812
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section-padding">
                    <div className="container-max">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            <span className="text-gradient-brand">Γιατί να Επιλέξετε το Κτήμα Ωρίων για τον Γάμο σας</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                            15+ χρόνια εμπειρίας σε γαμήλιες δεξιώσεις. Αποκλειστική χρήση χώρου.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <Card key={index} className="card-elegant hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <feature.icon className="w-10 h-10 text-brand-main mb-4" />
                                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Long-form SEO sections */}
                <section className="section-padding bg-muted/20">
                    <div className="container-max max-w-4xl space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Χώρος δεξίωσης και εγκαταστάσεις</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Ο χώρος δεξίωσης συνδυάζει <strong>κήπο</strong>, εξωτερικούς χώρους υποδοχής και <strong>κλιματιζόμενη αίθουσα</strong> για δείπνο και χορό. Η διάταξη προσαρμόζεται σε καθιστό ή mixed setup, με σχέδιο ροής από το welcome drink μέχρι το party. Υπάρχει άνετο <strong>parking</strong> και προσβάσιμη πρόσβαση για τους καλεσμένους σας.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Εκκλησάκι και κοντινές εκκλησίες για μυστήριο</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Για όσους επιλέγουν θρησκευτικό γάμο, η περιοχή προσφέρει <strong>εκκλησάκια κοντά στο κτήμα</strong> σε μικρή απόσταση με αυτοκίνητο. Στη σελίδα <Link href="/ekklisies" className="text-brand-main hover:underline">εκκλησίες κοντά στο κτήμα</Link> θα βρείτε λεπτομέρειες για ναούς όπως <Link href="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιος Αλέξανδρος Δασκαλειό</Link>, <Link href="/el/ekklisies/panagia-gkarika" className="text-brand-main hover:underline">Παναγία Γκαρικά</Link> και άλλους.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Μενού γάμου και υπηρεσίες catering</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Το <strong>μενού γάμου</strong> προσαρμόζεται στο στυλ σας (buffet, σερβιριστό, fusion) με επιλογές για ειδικές διατροφές. Μπορούμε να οργανώσουμε <strong>δοκιμαστικό μενού</strong> πριν την οριστική επιλογή, ώστε να δοκιμάσετε γεύσεις και παρουσίαση πιάτων.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Παροχές και συνεργάτες</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Συνεργαζόμαστε με έμπειρους επαγγελματίες για <strong>DJ και φωτισμό</strong>, <Link href="/fotografos" className="text-brand-main hover:underline">φωτογράφο γάμου</Link>, στολισμό και συντονισμό εκδήλωσης. Έτσι η <strong>δεξίωση γάμου σε κτήμα</strong> μένει οργανωμένη από την άφιξη μέχρι το τέλος της βραδιάς.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Χωρητικότητα και σενάρια εκδήλωσης</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Από <strong>μικρό γάμο</strong> έως μεγάλη δεξίωση, προτείνουμε διάταξη που ταιριάζει στο πλήθος και στον χρόνο που θέλετε για χορό και cocktail. Για καλοκαίρι ή χειμώνα, ο συνδυασμός εσωτερικού-εξωτερικού δίνει ευελιξία.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Κόστος γάμου σε κτήμα</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Το κόστος εξαρτάται από άτομα, μενού, ημέρα και πρόσθετες υπηρεσίες. Για ενδεικτική ανάλυση δείτε το άρθρο <Link href="/blog/kostos-gamou-ktima-2026" className="text-brand-main hover:underline">κόστος γάμου σε κτήμα 2026</Link>· για προσωπική προσφορά <Link href="/request" className="text-brand-main hover:underline">συμπληρώστε τη φόρμα αιτήματος</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEO intro */}
                <section className="section-padding">
                    <div className="container-max max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            <span className="text-gradient-brand">Κτήμα γάμου στην Αττική – Κτήμα Ωρίων Κερατέα</span>
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                Αν αναζητάτε <strong>κτήμα για γάμο</strong> κοντά στην Αθήνα, το <Link href="/" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link> στην Κερατέα (Ανατολική Αττική) είναι μια ισχυρή επιλογή: <strong>κτήμα γάμου με θέα θάλασσα</strong>, αποκλειστική χρήση και εμπειρία σε γαμήλιες δεξιώσεις. Στοχεύουμε σε ζευγάρια που ψάχνουν <strong>κτημα γαμου αθηνα</strong> ή <strong>κτημα γαμου ανατολικη αττικη</strong> με εύκολη πρόσβαση από την Αττική Οδό.
                            </p>

                            <p>
                                Το κτήμα βρίσκεται περίπου 45 λεπτά από το κέντρο της Αθήνας. Διαθέτουμε καταπράσινο εξωτερικό χώρο με πισίνα, κλιματιζόμενη αίθουσα και μεγάλο parking. Για <strong>κτημα γαμου με εκκλησακι</strong> ή τελετή σε κοντινό ναό, η περιοχή προσφέρει πολλές επιλογές σε σύντομη απόσταση.
                            </p>

                            <p>
                                Διαβάστε <Link href="/reviews" className="text-brand-main hover:underline">κριτικές ζευγαριών</Link> και το <Link href="/blog/syxnes-erotiseis-ktima-gamou" className="text-brand-main hover:underline">άρθρο με συχνές ερωτήσεις για κτήματα γάμου</Link>. Για checklist οργάνωσης, δείτε το <Link href="/blog/organoste-gamo-ktima-checklist" className="text-brand-main hover:underline">checklist γάμου σε κτήμα</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <TrustSignals />

                {/* Nearby Churches */}
                <NearbyChurches />

                {/* FAQs */}
                <FAQ items={faqs} title="Συχνές ερωτήσεις για κτήμα γάμου" />

                {/* Related Services */}
                <RelatedServices currentPage="/ktima-gamou" />

                {/* Popular Searches */}
                <PopularSearches
                    links={[
                        { label: "κτημα γαμου στην αττικη", href: "/el/ktima-gamou-athina" },
                        { label: "ρομαντικο κτημα για γαμο", href: "/ktima-gamou" },
                        { label: "κτημα για βαπτιση με κηπο", href: "/ktima-vaptisis" },
                        { label: "εκκλησιες κοντα στο κτημα", href: "/ekklisies" },
                        { label: "Δείτε τον χώρο", href: "/o-horos" },
                        { label: "Φωτογράφος γάμου", href: "/fotografos" }
                    ]}
                />

                {/* CTA */}
                <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
                    <div className="container-max text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Κλείστε Δωρεάν Επίσκεψη στο Κτήμα
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Επικοινωνήστε μαζί μας σήμερα για να δείτε τον χώρο και να λάβετε προσωποποιημένη προσφορά για τον γάμο σας
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/request">
                                <button className="button button4">Ζητήστε προσφορά</button>
                            </Link>
                            <a href="tel:+302299068812">
                                <button className="button button4">
                                    <Phone className="w-5 h-5 inline mr-2" />
                                    22990 68812
                                </button>
                            </a>
                            <Link href="/epikoinonia">
                                <button className="button button4">
                                    Επικοινωνία
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* FAQ Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>

            {/* Product Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Κτήμα Γάμου - Κτήμα Ωρίων",
                    "description": "Κτήμα για γάμο στην Αθήνα με θέα θάλασσα, 50-350 άτομα, κοντινά εκκλησάκια",
                    "brand": { "@type": "Brand", "name": "Κτήμα Ωρίων" }
                })}
            </script>
        </Layout>
    );
}
