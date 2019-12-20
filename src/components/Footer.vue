
<template>
  <v-footer
    dark
    height="auto"
  >
  <v-layout row wrap>
    <v-flex text-xs-center xs12>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
   </v-flex>
   <v-layout row wrap pa-3>
   <v-flex xl1 offset-xs1>

   </v-flex>
    <v-flex xs3>
   <h2>About me</h2>
   <p>So this was my story, If you got all the way here then you consider a desinger for your site.
    Now let me tell you something if you need modern and simple design then im your solution. 
    I have 6 Years expirence in graphic design. I will never quit a project untill its done the best way there is.</p>
    <span class="caption">Din ashkneazi</span>
</v-flex>
<v-spacer></v-spacer>
   <v-flex xs4>
<div class="contact-form">
   <v-flex >
   <h2 class="pb-2">Contact me</h2>
 <form action="https://formspree.io/dinashkenazi@gmail.com" method="POST">
  <v-text-field dark type="text" name="name"></v-text-field>
  <v-text-field dark type="email" name="_replyto"></v-text-field>
  <v-text-field dark type="submit" value="Send"></v-text-field>
</form>
   </v-flex>
   <v-flex  text-xs-right>
    <v-btn light>Send</v-btn>
   </v-flex>
</div>
   </v-flex>
</v-layout>
<v-flex xs12>
      <v-divider text--white></v-divider>
</v-flex>
    <v-flex xs12 text-xs-center pa-2>
        &copy;2019 — <strong>Din Ashkenazi</strong>
    </v-flex>
</v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {icon:'fab fa-facebook',url:'https://www.facebook.com/din.ashkanzi'},
        {icon:'fab fa-linkedin', url:'https://www.linkedin.com/in/din-ashkenazi-622b89141/'},
        {icon:'fab fa-instagram', url:'https://www.instagram.com/dinashkenazi/'},
      ]
    })
  }
</script>