import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Baby, Users, MapPin, Car, Home, Church, Camera, Star, CheckCircle2, Phone, Heart, Sparkles } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { TrustSignals } from '@/components/TrustSignals';
import { NearbyChurches } from '@/components/NearbyChurches';
import { RelatedServices } from '@/components/RelatedServices';
import { PopularSearches } from '@/components/PopularSearches';

export default function KtimaVaptisis() {
    const features = [
        { icon: Baby, title: "Παιδικό Μενού", description: "Ειδικές επιλογές φαγητού για τα παιδιά - νόστιμα και υγιεινά" },
        { icon: Home, title: "Ασφαλής Εξωτερικός Χώρος", description: "Καταπράσινος κήπος όπου τα παιδιά μπορούν να παίξουν με ασφάλεια" },
        { icon: Users, title: "30-250 Άτομα", description: "Ευέλικτες διαρρυθμίσεις για μικρές και μεγάλες βαπτίσεις" },
        { icon: Car, title: "Δωρεάν Parking 100+ Θέσεις", description: "Άνετη στάθμευση για όλη την οικογένεια" },
        { icon: Church, title: "Κοντινές Εκκλησίες", description: "8 εκκλησάκια σε απόσταση 5-15 λεπτά για την τελετή" },
        { icon: Camera, title: "Οικογενειακές Φωτογραφίες", description: "Υπέροχα σκηνικά για αναμνηστικές φωτογραφίες" }
    ];

    const faqs = [
        { question: "Πόσα άτομα μπορεί να φιλοξενήσει το Κτήμα Ωρίων σε βάπτιση;", answer: "Οργανώνουμε βαπτίσεις από μικρές οικογενειακές δεξιώσεις έως μεγαλύτερες συγκεντρώσεις (ενδεικτικά περίπου 30–250 άτομα), με διατάξεις που προσαρμόζονται στο πλήθος και στο στυλ της εκδήλωσης." },
        { question: "Υπάρχουν ειδικά μενού για παιδιά;", answer: "Ναι. Προσφέρουμε παιδικό μενού και επιλογές για ειδικές διατροφές· μπορούμε να συνδυάσουμε buffet και σερβιριστό ανάλογα με την ηλικία των καλεσμένων." },
        { question: "Μπορούμε να φέρουμε δικό μας ζαχαροπλαστείο ή διακοσμητή;", answer: "Συνήθως ναι· οι λεπτομέρειες καθορίζονται στο πακέτο σας. Μπορούμε επίσης να προτείνουμε αξιόπιστους συνεργάτες για τούρτα και στολισμό." },
        { question: "Υπάρχει χώρος για αλλαγή ρούχων του μωρού;", answer: "Ναι, υπάρχει άνετος χώρος για αλλαγή και τις ανάγκες του μωρού, με πρόσβαση σε καθαρούς χώρους υγιεινής κοντά στη δεξίωση." },
        { question: "Πόσο κοστίζει η βάπτιση σε κτήμα;", answer: "Το κόστος εξαρτάται από αριθμό ατόμων, μενού και ημέρα. Ζητήστε εξατομικευμένη προσφορά μέσω της φόρμας αιτήματος ή τηλεφωνικά." },
        { question: "Είναι ασφαλής ο εξωτερικός χώρος για παιδιά;", answer: "Ο κήπος είναι περιφραγμένος και σχεδιασμένος ώστε τα παιδιά να κινούνται με ασφάλεια· μπορούμε να οργανώσουμε και ψυχαγωγία κατόπιν συνεννόησης." },
        { question: "Πόσο κοντά είναι η εκκλησία από το κτήμα βάπτισης;", answer: "Πολλοί ναοί της περιοχής απέχουν περίπου 5–15 λεπτά με αυτοκίνητο. Λίστα και χάρτης στη σελίδα εκκλησιών." },
        { question: "Μπορώ να επισκεφθώ το κτήμα;", answer: "Κλείστε δωρεάν ξενάγηση στο 22990 68812 ή μέσω της φόρμας επικοινωνίας." }
    ];

    return (
        <Layout>
            <div className="pt-20">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
                    <div className="container-max text-center">
                        <Baby className="w-16 h-16 text-brand-main mx-auto mb-6" />
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-gradient-brand">Κτήμα για βάπτιση με κήπο και ζεστή ατμόσφαιρα</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                            Δεξίωση βάπτισης στην Ανατολική Αττική: ασφαλής κήπος, παιδικό μενού και κοντινές εκκλησίες στο Κτήμα Ωρίων
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Παιδικό μενού • Ασφαλής κήπος • 8 κοντινές εκκλησίες
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
                            <span className="text-gradient-brand">Γιατί το Κτήμα Ωρίων για τη Βάπτιση σας</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                            15+ χρόνια εμπειρίας σε βαπτιστικές δεξιώσεις. Οικογενειακό περιβάλλον.
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


                <section className="section-padding bg-muted/20">
                    <div className="container-max max-w-4xl space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Γιατί να κάνετε τη βάπτιση σε κτήμα</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Ένα <strong>κτήμα για βάπτιση</strong> δίνει φυσικό περιβάλλον, χώρο για παιχνίδι και πιο «οικογενειακή» ροή από μια κλειστή αίθουσα. Στην <strong>Ανατολική Αττική</strong> συνδυάζετε εύκολη πρόσβαση από την Αθήνα με ήρεμη ατμόσφαιρα και <strong>δωρεάν parking</strong> για συγγενείς και φίλους.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Ο χώρος του Κτήματος Ωρίων για βάπτιση</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Ο <strong>κήπος</strong> και οι εξωτερικοί χώροι είναι ιδανικοί για παιδιά, καροτσάκια και οικογενειακές φωτογραφίες· παράλληλα η κλειστή αίθουσα εξασφαλίζει plan B σε ζέστη ή βροχή. Δείτε φωτογραφίες στο <Link href="/o-horos" className="text-brand-main hover:underline">Ο χώρος</Link>.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Μενού βάπτισης και παιδικές επιλογές</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Το <strong>μενού βάπτισης</strong> μπορεί να περιλαμβάνει παιδικά πιάτα, finger food, γλυκά και ice cream station. Συζητάμε μαζί σας για αλλεργίες και ειδικές διατροφές ώστε όλοι να απολαύσουν τη <strong>δεξίωση βάπτισης σε κτήμα</strong>.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                <span className="text-gradient-brand">Κοντινές εκκλησίες για το μυστήριο</span>
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground text-center md:text-left">
                                <p>
                                    Μετά το μυστήριο, η μετάβαση στο κτήμα είναι σύντομη. Αναλυτικά για <Link href="/ekklisies" className="text-brand-main hover:underline">εκκλησίες κοντά στο κτήμα</Link> (π.χ. <Link href="/el/ekklisies/agios-alexandros-daskaleio" className="text-brand-main hover:underline">Άγιος Αλέξανδρος</Link>, <Link href="/el/ekklisies/panagia-gkarika" className="text-brand-main hover:underline">Παναγία Γκαρικά</Link>).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container-max max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            <span className="text-gradient-brand">Κτήμα για βάπτιση στην Αττική – Κτήμα Ωρίων</span>
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                Αν ψάχνετε <strong>κτηματα για βαπτιση αθηνα</strong> ή <strong>κτημα βαπτισης αττικη</strong>, το <Link href="/" className="text-brand-main hover:underline">Κτήμα Ωρίων</Link> στην Κερατέα συνδυάζει πράσινο, ασφάλεια για παιδιά και εμπειρία σε οικογενειακές δεξιώσεις. Ιδανικό για όσους θέλουν <strong>βάπτιση σε κτήμα με κήπο</strong> κοντά στην πόλη.
                            </p>

                            <p>
                                Για πρακτικές συμβουλές πριν την οργάνωση, διαβάστε το <Link href="/blog/ti-na-proseksete-sti-vaptisi" className="text-brand-main hover:underline">άρθρο «Τι να προσέξετε στη βάπτιση»</Link> και τις <Link href="/blog/syxnes-erotiseis-ktima-vaptisis" className="text-brand-main hover:underline">συχνές ερωτήσεις για κτήματα βάπτισης</Link>. Για προσφορά <Link href="/request" className="text-brand-main hover:underline">συμπληρώστε τη φόρμα αιτήματος</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Trust Signals */}
                <TrustSignals />

                {/* Nearby Churches */}
                <NearbyChurches />

                {/* FAQs */}
                <FAQ items={faqs} title="Συχνές ερωτήσεις για βάπτιση σε κτήμα" />

                {/* Related Services */}
                <RelatedServices currentPage="/ktima-vaptisis" />

                {/* Popular Searches */}
                <PopularSearches
                    links={[
                        { label: "κτηματα βαπτισης αθηνα", href: "/el/ktimata-vaptisis-athina" },
                        { label: "κτημα για βαπτιση με κηπο", href: "/ktima-vaptisis" },
                        { label: "κτημα βαπτισης στην ανατολικη αττικη", href: "/ktima-vaptisis" },
                        { label: "εκκλησιες κοντα στο κτημα", href: "/ekklisies" },
                        { label: "Κτήμα γάμου", href: "/ktima-gamou" },
                        { label: "Επικοινωνία", href: "/epikoinonia" }
                    ]}
                />

                {/* CTA */}
                <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
                    <div className="container-max text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Κλείστε Δωρεάν Επίσκεψη για τη Βάπτιση
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Επικοινωνήστε μαζί μας σήμερα για να δείτε τον χώρο και να οργανώσουμε την τέλεια βαπτιστική δεξίωση
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
                    "name": "Κτήμα Βάπτισης - Κτήμα Ωρίων",
                    "description": "Κτήμα για δεξίωση βάπτισης στην Αθήνα με παιδικό μενού, ασφαλή κήπο, κοντινές εκκλησίες",
                    "brand": { "@type": "Brand", "name": "Κτήμα Ωρίων" }
                })}
            </script>
        </Layout>
    );
}
