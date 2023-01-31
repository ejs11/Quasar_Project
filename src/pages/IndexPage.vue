<template>
  <q-page>
    <q-card class="my-card q-ma-xl" flat bordered>
      <q-card-section horizontal class="bg-red-5">
        <q-card-section class="q-pa-xl text-center">
          <h2 class="hbanner">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </h2>
          <p class="pbanner">
            ae, officiis harum quod distinctio nisi, nesciunt velit.
            Necessitatibus vitae soluta aut est inventore aliquam nisi non
            labore saepe vero!
          </p>
          <LoginBtn
            btn="Learner"
            color="white"
            background-color="navy"
            to="./LoginPage"
          />
          <LoginBtn btn="Parent" color="white" background-color="navy" />
          <LoginBtn btn="School" color="white" background-color="navy" />
        </q-card-section>
        <q-img class="col-5" src="../assets/Screenshot_school_remote.png" />
      </q-card-section>
    </q-card>

    <div class="container collapsibles_container">
      <q-expansion-item
        class="collapsible"
        group="somegroup6"
        icon="ti-angle-down"
        label="UACE"
        default-closed
        :header-style="{ backgroundColor: 'gray' }"
      >
        <q-card>
          <q-card-section>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="collapsible"
        group="somegroup5"
        icon="ti-angle-down"
        label="PLE"
        default-closed
        :header-style="{ backgroundColor: 'gray' }"
      >
        <q-card>
          <q-card-section>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="collapsible"
        group="somegroup4"
        icon="ti-angle-down"
        label="UCE"
        default-closed
        :header-style="{ backgroundColor: 'gray' }"
      >
        <q-card>
          <q-card-section>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="collapsible"
        group="somegroup3"
        icon="ti-angle-down"
        label="PreMocks"
        default-closed
        :header-style="{ backgroundColor: 'gray' }"
      >
        <q-card>
          <q-card-section>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="collapsible"
        group="somegroup2"
        icon="ti-angle-down"
        label="LOREM TITLE"
        default-closed
        :header-style="{ backgroundColor: 'gray' }"
      >
        <q-card>
          <q-card-section>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        class="collapsible"
        group="somegroup1"
        icon="ti-angle-down"
        label="LOREM TITLE"
        default-closed
        :header-style="{ backgroundColor: 'gray' }"
      >
        <q-card>
          <q-card-section>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>

    <h3 class="heading why" color="red-4">Why ONITA ... ?</h3>
    <div class="container flex_container">
      <div class="item_container">
        <div class="img">
          <q-icon name="ti-book" size="50px" color="red-4" />
        </div>
        <div class="item_header">
          <h4>Quality Exams</h4>
        </div>
        <div class="caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          consectetur nulla inventore consequuntur sit. Cumque, beatae.
          Explicabo velit quia molestiae?
        </div>
      </div>
      <div class="item_container">
        <div class="img">
          <q-icon name="verified_user" color="red-4" size="50px" />
        </div>
        <div class="item_header">
          <h4>Recognized By UNEB</h4>
        </div>
        <div class="caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.
          consectetur nulla inventore consequuntur sit. Cumque, beatae.
          Explicabo velit quia molestiae?
        </div>
      </div>

      <div class="item_container">
        <div class="img">
          <q-icon name="ti-user" size="50px" color="red-4" />
        </div>
        <div class="item_header">
          <h4>Personalized Exams</h4>
        </div>
        <div class="caption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum.
          consectetur nulla inventore consequuntur sit. Cumque, beatae.
          Explicabo velit quia molestiae?
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-card class="my-card">
        <div class="container sections" id="xc">
          <div class="section_item img">
            <img src="../assets/students-lessonup.png" alt="" />
          </div>
          <div class="section_item caption">
            <h4>ONITA For Learners</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              totam corrupti cupiditate corporis temporibus unde non optio eius
              deleniti
            </p>
            <LoginBtn btn="Something.." />
          </div>
        </div>

        <div class="container sections">
          <div class="section_item img">
            <img src="../assets/parents.png" alt="" />
          </div>
          <div class="section_item caption">
            <h4>ONITA For Parents</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              totam corrupti cupiditate corporis temporibus unde non optio eius
              deleniti
            </p>
            <LoginBtn btn="Something.." />
          </div>
        </div>

        <div class="container sections">
          <div class="section_item img">
            <img src="../assets/teacher.png" alt="" />
          </div>
          <div class="section_item caption">
            <h4>ONITA For Teachers</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              totam corrupti cupiditate corporis temporibus unde non optio eius
              deleniti
            </p>
            <LoginBtn btn="Something.." />
          </div>
        </div>

        <div class="container sections">
          <div class="section_item img">
            <img src="../assets/school-building.jpeg" alt="" />
          </div>
          <div class="section_item caption">
            <h4>ONITA For Schools</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              totam corrupti cupiditate corporis temporibus unde non optio eius
              deleniti
            </p>
            <LoginBtn btn="Something.." />
          </div>
        </div>
      </q-card>
    </div>

    <div class="container testimonials bg-grey q-pa-125px ">
      
    </div>

    nobis. Eveniet exercitationem obcaecati temporibus saepe corporis,
    voluptates culpa ea veniam expedita corrupti. Veniam eaque nulla veritatis,
    exercitationem ipsam impedit modi aperiam eos! Voluptate neque unde dolores
    recusandae rem dignissimos quo voluptatum repellat at? Sit optio assumenda
    fugiat quo, doloremque necessitatibus quaerat commodi dolore cum rerum
    laboriosam nostrum nobis rem et, porro dolores soluta aliquid facilis sequi
    animi neque labore sed voluptates ipsa? Aperiam dignissimos placeat debitis
    delectus expedita, facere dolorem omnis eveniet nesciunt nihil? Voluptatibus
    iure vero laudantium molestias! Nemo et, odio vel molestiae temporibus,
    aliquam, animi distinctio officia hic cum illo facilis a consectetur
    voluptatum quis unde est! Similique dignissimos itaque eos magnam qui totam
    ipsa vero fugiat quas? Animi praesentium expedita, molestiae laborum eos vel
    deserunt? Dolore unde a rem accusamus in rerum optio, voluptas repellendus
    velit molestias iste impedit voluptatem nostrum consequatur consectetur
    sequi consequuntur est quae ex? Error earum nostrum vitae repudiandae
    sapiente blanditiis necessitatibus ducimus, reiciendis, omnis eum corrupti?
    Eaque aspernatur corrupti temporibus nisi voluptatem animi sapiente quod ex
    quam porro, facilis, facere nemo consequatur deleniti iusto? Eveniet maiores
    id est ducimus nesciunt corporis officia enim totam ab, labore corrupti quae
    reiciendis voluptatem beatae non repellat ipsam ullam obcaecati, cupiditate
    sapiente. Amet, quis. Voluptas, non suscipit nostrum reprehenderit ut ullam
    error at quibusdam fuga corrupti sequi. At eius eum odit delectus assumenda,
    dolorum qui laboriosam illo modi cumque eveniet excepturi temporibus labore,
    odio molestiae alias natus perferendis tempora iste, recusandae doloribus
    animi ea consequuntur. Nihil, quae quo a expedita at itaque voluptates eius
    voluptatem rem provident dolore, ex earum ut explicabo? Autem repellendus
    numquam assumenda rerum voluptates ea exercitationem vel maiores minus.
    Veniam praesentium qui totam doloribus nihil veritatis corrupti saepe
    consequatur labore soluta dicta tempora sequi accusamus voluptatum alias
    sint unde iusto, fugit, omnis aut delectus placeat? Consectetur est porro
    expedita. Asperiores ullam doloribus autem, incidunt voluptatem numquam eos
    perferendis! Dignissimos laudantium recusandae nesciunt deleniti vel,
    doloremque beatae nobis ea cupiditate distinctio nemo incidunt quaerat
    maxime enim molestias officiis quod debitis! Vel blanditiis architecto
    voluptate assumenda, nesciunt reprehenderit vitae quia eveniet dolor, quidem
    porro? Quos culpa nemo placeat unde omnis facere vero architecto, quas sunt
    a ipsam molestiae, nesciunt quae laboriosam non labore. Esse quo sed
    accusamus in libero officiis ea autem ipsum deserunt nam aliquid, nisi
    exercitationem nihil quidem corrupti neque reiciendis ipsam porro aperiam
    temporibus cupiditate facilis. Numquam quae corrupti, earum in optio odio
    accusamus aliquam voluptatem temporibus. Nihil vero, sed, itaque recusandae
    dolores culpa magni possimus facilis deleniti placeat labore. Magni numquam
    esse a nostrum, error amet ea voluptatum ipsa consectetur incidunt soluta.
    Enim eligendi eum perspiciatis veritatis labore! Nemo neque tempore cumque?
    Nihil quos quasi ipsa quia harum iste minima incidunt explicabo voluptatibus
    nesciunt sint ab a aut, sapiente qui. Qui tenetur rem aut laudantium, atque
    unde, labore quibusdam commodi praesentium quia soluta. Molestiae nesciunt
    minima necessitatibus neque accusamus, fuga id architecto exercitationem
    sequi animi repellat ea error, voluptatibus inventore voluptatem asperiores
    velit aut laborum a vitae odio, veritatis doloribus odit. Asperiores vitae
    nulla magnam laborum voluptatem quasi dignissimos quod perferendis
    repellendus minima unde, voluptatibus quaerat sint impedit officiis eius
    libero aspernatur consequuntur amet! Eius ipsam vero delectus harum,
    adipisci ad inventore fugit obcaecati incidunt. Accusamus, laudantium quis
    eos ullam nam, sunt dicta aspernatur deserunt ad in ipsam voluptas
    voluptatum repellendus. Veritatis necessitatibus atque consectetur, voluptas
    sit vero explicabo aut perspiciatis ducimus quasi, nobis excepturi optio
    quibusdam sequi laboriosam, iste esse rerum doloremque iusto maxime fuga.
    Tempore dignissimos odit provident quos distinctio adipisci magni soluta
    libero. Inventore est labore libero eligendi sed, tempora vero vitae facilis
    laborum. Sed soluta maiores, porro mollitia, explicabo quidem expedita,
    ducimus ut veniam perspiciatis amet tempora culpa! Quas, odit vero. Quis
    corrupti fuga aliquam eum, saepe accusamus sapiente repellendus, repellat
    sequi commodi quo quae? In voluptate adipisci voluptatum sint illum id
    laudantium enim eaque ipsam, sed delectus iure reprehenderit obcaecati
    necessitatibus porro dolor doloribus tempora corporis perspiciatis? Nihil,
    beatae in vitae reiciendis facere provident quasi officiis deleniti eveniet,
    minima aliquam veritatis modi sed tempore non esse. Doloribus ab vel dolore!
    Voluptas officia non cum ullam esse quas sit error consectetur, accusamus
    inventore expedita reiciendis cupiditate exercitationem architecto velit
    veniam, amet maxime quod. Dolores magni ipsum cupiditate exercitationem ad
    voluptatum reiciendis reprehenderit dolore voluptate molestiae, porro
    sapiente debitis, accusantium repellendus totam. Totam dolores, porro
    dolorem, facilis quisquam beatae earum ipsa et adipisci, explicabo culpa
    voluptatibus quidem minus id dicta! Ratione officia ipsam similique repellat
    illum repudiandae architecto doloribus earum eaque mollitia quibusdam minus,
    facere aliquid quidem perferendis explicabo labore dolores ullam. Reiciendis
    ab rerum deserunt porro adipisci reprehenderit. Eligendi consequuntur
    corrupti minima doloribus? Consectetur necessitatibus iste repellat atque a
    ex natus, voluptates enim. Repellat, accusantium deserunt laudantium debitis
    excepturi animi neque dignissimos eius nam voluptate ab? Fugiat mollitia
    exercitationem sunt. Maxime nemo aut, earum nisi odio numquam possimus
    voluptatibus ducimus hic modi commodi perspiciatis quibusdam iusto quam in,
    cum illo sequi natus et. Eaque odio animi mollitia rerum quo fuga
    dignissimos sequi corrupti sint, quis itaque sit ut inventore doloribus.
    Debitis, ratione architecto, cumque unde libero et odit ipsam voluptate
    nulla quos sapiente asperiores nihil ducimus id voluptatibus sunt.
    Voluptatum molestias omnis facilis delectus neque veritatis ipsa tenetur
    magnam voluptatibus, tempora debitis velit officia, distinctio, consequatur
    possimus iusto illum quaerat quasi ducimus. Perspiciatis numquam cupiditate
    recusandae sint dignissimos. Laborum optio enim sit iusto minima eius
    tempore veniam cupiditate, at distinctio omnis non sed ex inventore!
    Architecto, quibusdam ratione. Veritatis ullam dolor, dolores nisi
    asperiores, adipisci non ab rerum quam aut similique eligendi. Atque eaque
    aspernatur neque corrupti laborum alias quibusdam ullam fugiat sapiente
    perspiciatis, pariatur quas qui vero culpa facere quidem voluptatem nesciunt
    perferendis tempora. Est eligendi suscipit ipsa!
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import LoginBtn from "../components/LoginBtn.vue";
import CardSections from "../components/CardSections.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    LoginBtn,
  },
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    clickMe() {
      document.getElementsByTagName("li").style.display = "none";
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.pbanner {
  color: yellow;
  width: 50%;
  margin: auto;
  margin-bottom: 30px;
}
.hbanner {
  font-weight: 350;
}
.products-category,
.container {
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.collapsible {
  background-color: rgba(192, 190, 190, 0.644);
  width: 200px;
  padding: 10px;
  margin: 20px;
}

ul li {
  cursor: pointer;
  list-style: none;
  margin-left: -40px;
  padding: 5px 0px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(151, 149, 149, 0.63);
}
ul li:hover {
  background-color: rgba(128, 128, 128, 0.267);
}
ul {
  margin: auto;
}

/* flex container */
.flex_container {
  padding: 30px 0px;
  background-color: white;
}
h3.why {
  margin: 50px 0px;
  font-size: x-large;
  font-weight: 300;
  color: tomato;
  text-align: center;
  font-family: "Permanent Marker", cursive;
}
.item_container {
  width: 450px;
  padding: 20px;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
.item_container h4 {
  font-size: large;
  font-weight: 450;
}

/*section*/
.sections {
  margin-top: 10%;
  padding: 0px 100px;
  background-color: white;
}
.section_item {
  width: 450px;
  padding: 0px 50px;
  text-align: center;
  background-color: white;
}

.section_item:last-child {
  text-align: left;
}
.my-card {
  padding: 20px 5px;
}
.inverted-commas {
  color: #9cedaf;
  font-weight: bolder;
  font-size: 2.5rem;
}
</style>
