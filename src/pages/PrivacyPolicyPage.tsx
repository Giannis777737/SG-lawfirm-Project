import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";

const PrivacyPolicyPage = () => {
  useDocumentTitle("Πολιτική Απορρήτου");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        description="Πολιτική Απορρήτου του Δικηγορικού Γραφείου Σελέκου – Γκούσκου: πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα σύμφωνα με τον ΓΚΠΔ."
        title="Πολιτική Απορρήτου | Σελέκος – Γκούσκου & Συνεργάτες"
      />
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Legal</p>
            <h1 className="editorial-heading mb-12">Πολιτική Απορρήτου</h1>

            <div className="max-w-3xl flex flex-col gap-8">
              <p className="font-body text-base text-muted-foreground">
                Το Δικηγορικό Γραφείο Selekos_Gouskou & Co («εμείς», «μας», «εμάς») δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα και να σέβεται το απόρρητό σας.
              </p>

              <p className="font-body text-base text-muted-foreground">
                Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, αποθηκεύουμε και προστατεύουμε τα στοιχεία σας όταν αλληλεπιδράτε με τον ιστότοπό μας και όταν παρέχουμε τις νομικές μας υπηρεσίες.
              </p>

              <p className="font-body text-base text-muted-foreground">
                Συμμορφωνόμαστε με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (ΕΕ) 2016/679 («ΓΚΠΔ»), τον Ελληνικό Νόμο 4624/2019 και τις επαγγελματικές υποχρεώσεις που ορίζει ο Δικηγορικός Σύλλογος Ελλάδος.
              </p>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Υπεύθυνος Επεξεργασίας Δεδομένων
                </h2>
                <p className="editorial-body">
                  Δικηγορικό Γραφείο Σελέκου – Γκούσκου
                </p>
                <p className="editorial-body">
                  Σκουφά 5-7, Αθήνα, 10673, Αττική
                </p>
                <p className="editorial-body">
                  Τηλ.: +30 210 72 56 523
                </p>
                <p className="editorial-body">
                  Ηλεκτρονικό ταχυδρομείο:{" "}
                  <a
                    href="mailto:info@selekos-gouskou.gr"
                    className="text-foreground underline"
                  >
                    info@selekos-gouskou.gr
                  </a>
                </p>
                <p className="editorial-body mt-2">
                  Εάν έχετε οποιεσδήποτε ερωτήσεις σχετικά με αυτήν την Πολιτική Απορρήτου ή τις πρακτικές μας για την προστασία δεδομένων, επικοινωνήστε μαζί μας στα παραπάνω στοιχεία.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Προσωπικά Δεδομένα που Συλλέγουμε
                </h2>
                <p className="editorial-body">
                  Δεν είστε υποχρεωμένοι να μας παρέχετε τα προσωπικά σας δεδομένα για να αποκτήσετε πρόσβαση σε οποιαδήποτε ενότητα του ιστότοπού μας.
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Κατά την παροχή νομικών υπηρεσιών ή όταν επικοινωνείτε μαζί μας για νομικές συμβουλές, υποβάλλετε αίτηση για εργασία ή ζητάτε πληροφορίες σχετικά με τον ιστότοπό μας, ενδέχεται να συλλέξουμε και να επεξεργαστούμε προσωπικά δεδομένα από εσάς, συμπεριλαμβανομένων των εξής: Όνομα, διεύθυνση, αριθμό τηλεφώνου και διεύθυνση ηλεκτρονικού ταχυδρομείου.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Πληροφορίες που παρέχετε όταν επικοινωνείτε μαζί μας μέσω φορμών, email, τηλεφώνου ή αυτοπροσώπως.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Έγγραφα και λεπτομέρειες σχετικά με το νομικό σας ζήτημα.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Στοιχεία χρέωσης και πληρωμής.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Οποιεσδήποτε άλλες πληροφορίες που σας αφορούν.
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  Τεχνικές πληροφορίες που συλλέγονται αυτόματα, όπως διεύθυνση IP, τύπος προγράμματος περιήγησης, λειτουργικό σύστημα, πληροφορίες συσκευής, δεδομένα χρήσης ιστότοπου μέσω cookies (ανατρέξτε στην Πολιτική μας για τα Cookies).
                </p>
                <p className="editorial-body mt-3">
                  Ευαίσθητα προσωπικά δεδομένα (όπως δεδομένα υγείας, ποινικά μητρώα ή άλλες κατηγορίες που ορίζονται στο Άρθρο 9 του ΓΚΠΔ) όταν είναι απαραίτητα για νομικές αξιώσεις, συμμόρφωση με νομικές υποχρεώσεις ή σε σχέση με τις νομικές υπηρεσίες που παρέχουμε.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Σκοποί και Νομική Βάση Επεξεργασίας
                </h2>
                <p className="editorial-body">
                  Επεξεργαζόμαστε τα προσωπικά σας δεδομένα για τους ακόλουθους σκοπούς:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Παροχή νομικών υπηρεσιών (Άρθρο 6(1)(β) ΓΚΠΔ – εκτέλεση σύμβασης).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Συμμόρφωση με τις νομικές και κανονιστικές υποχρεώσεις, συμπεριλαμβανομένων των απαιτήσεων για την καταπολέμηση της νομιμοποίησης εσόδων από παράνομες δραστηριότητες, της λογιστικής και των δικαστικών απαιτήσεων (Άρθρο 6(1)(γ) ΓΚΠΔ).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Επικοινωνία και διαχείριση υποθέσεων κατά τη διάρκεια της εκπροσώπησης.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Ασφάλεια και αναλυτικά στοιχεία ιστότοπου (Άρθρο 6(1)(στ) ΓΚΠΔ – έννομα συμφέροντα).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Μάρκετινγκ (μόνο με τη ρητή συγκατάθεσή σας – Άρθρο 6(1)(α) ΓΚΠΔ).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Διατήρηση Δεδομένων
                </h2>
                <p className="editorial-body">
                  Διατηρούμε τα προσωπικά δεδομένα μόνο για όσο χρονικό διάστημα είναι απαραίτητο για τους σκοπούς για τους οποίους συλλέχθηκαν:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Φάκελοι νομικών υποθέσεων: φυλάσσονται όπως απαιτείται από την ελληνική νομοθεσία και τους κανονισμούς του Δικηγορικού Συλλόγου (συνήθως 5–10 έτη).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Υποβολές φόρμας επικοινωνίας μέσω ιστότοπου: έως 12 μήνες εάν δεν έχει συναφθεί συμβατική σχέση.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Δεδομένα που υπόκεινται σε νομοθετικές υποχρεώσεις διατήρησης: για όσο διάστημα απαιτείται από την ισχύουσα νομοθεσία.
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  Μετά τη λήξη αυτών των περιόδων, τα δεδομένα διαγράφονται με ασφάλεια ή ανωνυμοποιούνται.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Κοινή χρήση και μεταφορές δεδομένων
                </h2>
                <p className="editorial-body">
                  Δεν θα αποκαλύψουμε τα προσωπικά σας δεδομένα εκτός των Δικηγορικών Γραφείων Selekos_Gouskou & Co, εκτός από τις ακόλουθες περιπτώσεις:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Δικαστήρια, αρχές ή αντίδικα μέρη, όταν είναι απαραίτητο για νομική εκπροσώπηση ή όταν απαιτείται από τον νόμο.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Τρίτοι πάροχοι υπηρεσιών (π.χ. λογιστές, υποστήριξη IT, πάροχοι φιλοξενίας, υπηρεσίες email, πάροχοι ασφαλούς αποθήκευσης) που μας υποστηρίζουν στην παροχή των υπηρεσιών μας και δεσμεύονται από συμφωνίες εμπιστευτικότητας και προστασίας δεδομένων.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Ρυθμιστικές αρχές, όταν απαιτείται από το νόμο.
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  Δηλώνουμε ρητά ότι δεν πωλούνται ούτε ενοικιάζονται προσωπικά δεδομένα.
                </p>
                <p className="editorial-body mt-3">
                  Επιπλέον, καμία προσωπική ημερομηνία δεν μεταφέρεται εκτός του Ευρωπαϊκού Οικονομικού Χώρου, εκτός εάν υπάρχουν επαρκείς διασφαλίσεις (π.χ., Τυποποιημένες Συμβατικές Ρήτρες).
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Ασφάλεια Δεδομένων
                </h2>
                <p className="editorial-body">
                  Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών δεδομένων από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση, αποκάλυψη ή καταστροφή, όπως:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Κρυπτογραφημένες επικοινωνίες όπου είναι δυνατόν.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Περιορισμένη πρόσβαση βάσει της αρχής της «ανάγκης γνώσης».
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Ασφαλή συστήματα αποθήκευσης και αντίγραφα ασφαλείας.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Τα Δικαιώματά σας
                </h2>
                <p className="editorial-body">
                  Έχετε τα ακόλουθα δικαιώματα βάσει του ΓΚΠΔ:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Πρόσβαση – ζητήστε αντίγραφο των προσωπικών σας δεδομένων.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Διόρθωση – αίτημα διόρθωσης ανακριβών ή ελλιπών δεδομένων.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Διαγραφή – ζητήστε τη διαγραφή των δεδομένων σας, με την επιφύλαξη των νόμιμων υποχρεώσεων διατήρησης.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Περιορισμός – αίτημα περιορισμού της επεξεργασίας υπό ορισμένες συνθήκες.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Φορητότητα – ζητήστε τα δεδομένα σας σε δομημένη, κοινώς χρησιμοποιούμενη και αναγνώσιμη από μηχανήματα μορφή και διαβιβάστε τα σε άλλον οργανισμό.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Αντίρρηση – ένσταση στην επεξεργασία βάσει έννομων συμφερόντων.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Ανάκληση συγκατάθεσης – όταν η επεξεργασία βασίζεται στη συγκατάθεσή σας.
                  </li>
                </ul>
                <p className="editorial-body mt-4">
                  Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε μαζί μας στη διεύθυνση{" "}
                  <a
                    href="mailto:info@selekos-gouskou.gr"
                    className="text-foreground underline"
                  >
                    info@selekos-gouskou.gr
                  </a>
                  .
                </p>
                <p className="editorial-body mt-3">
                  Εάν θεωρείτε ότι το Δικηγορικό Γραφείο Selekos_Gouskou & Co παραβιάζει την ισχύουσα νομοθεσία περί προστασίας δεδομένων κατά την επεξεργασία των προσωπικών σας δεδομένων, έχετε επίσης το δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (
                  <a
                    href="https://www.dpa.gr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline"
                  >
                    www.dpa.gr
                  </a>
                  ).
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Μπισκότα
                </h2>
                <p className="editorial-body">
                  Ο ιστότοπός μας χρησιμοποιεί cookies για να διασφαλίσει την ορθή λειτουργία και να βελτιώσει την εμπειρία χρήστη.
                </p>
                <p className="editorial-body mt-2">
                  Για περισσότερες πληροφορίες, ανατρέξτε στην Πολιτική μας για τα Cookies.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Αλλαγές στην παρούσα Πολιτική
                </h2>
                <p className="editorial-body">
                  Ενδέχεται να ενημερώνουμε την παρούσα Πολιτική Απορρήτου κατά καιρούς.
                </p>
                <p className="editorial-body mt-2">
                  Οι αλλαγές θα αναρτηθούν σε αυτήν τη σελίδα με αναθεωρημένη ημερομηνία «Τελευταίας ενημέρωσης».
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Επαφή
                </h2>
                <p className="editorial-body">
                  Για οποιεσδήποτε ερωτήσεις ή αιτήματα σχετικά με την παρούσα Πολιτική Απορρήτου, επικοινωνήστε με:
                </p>
                <p className="editorial-body mt-2">
                  Δικηγορικά Γραφεία Selekos_Gouskou & Co
                </p>
                <p className="editorial-body">
                  Σκουφά 5-7, Αθήνα, 10673, Αττική
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Link to="/" className="editorial-link">
                <span>←</span> Επιστροφή στην αρχική σελίδα
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
