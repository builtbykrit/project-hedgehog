<template>
  <div class="container">
    <div class="grid-container one">
      <div class="card-wrapper">
        <Card>
          <div class="header text-center">
            <h1 v-if="code">Welcome to Albatross!</h1>
            <h1 v-else>Sign up for Albatross</h1>
          </div>
          <div v-if="code">
            <Input
              placeholder="Name your team..."
              name="teamName"
              label="What is your team called?"
              :invalid="inputIsInvalid(signUpRequest.teamName)"
              :value="signUpRequest.teamName"
            />
            <Input
              name="firstName"
              placeholder="First Name"
              label="What is your name?"
              :invalid="inputIsInvalid(signUpRequest.firstName)"
              :value="signUpRequest.firstName"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              :invalid="inputIsInvalid(signUpRequest.lastName)"
              :value="signUpRequest.lastName"
            />
            <Input
              name="emailAddress"
              placeholder="Enter your email..."
              label="What is your email address?"
              :invalid="inputIsInvalid(signUpRequest.emailAddress)"
              :value="signUpRequest.emailAddress"
            />
            <Input
              type="password"
              name="password"
              placeholder="Create your password..."
              label="What is your email address?"
              :invalid="inputIsInvalid(signUpRequest.password)"
              :value="signUpRequest.password"
            />
            <p
              class="small text-left"
            >Passwords must be at least 8 characters and contain at least 1 special character</p>
          </div>
          <div v-else>
            <div class="grid-container one-one">
              <Input
                name="firstName"
                placeholder="First Name"
                label="What is your name?"
                :invalid="inputIsInvalid(signUpRequest.firstName)"
                :value="signUpRequest.firstName"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                :invalid="inputIsInvalid(signUpRequest.lastName)"
                :value="signUpRequest.lastName"
              />
            </div>

            <Input
              name="emailAddress"
              placeholder="Enter your email..."
              label="What is your email address?"
              :invalid="inputIsInvalid(signUpRequest.emailAddress)"
              :value="signUpRequest.emailAddress"
            />
            <Input
              type="password"
              name="password"
              placeholder="Create your password..."
              label="What is your email address?"
              :invalid="inputIsInvalid(signUpRequest.password)"
              :value="signUpRequest.password"
            />
            <p
              class="small text-left"
            >Passwords must be at least 8 characters and contain at least 1 special character</p>
          </div>

          <section>
            <Input
              label="Receive emails about updates to Albatross and more"
              type="checkbox"
              name="wantsEmail"
              :checked="signUpRequest.wantsEmail"
            />
          </section>

          <section v-if="!code">
            <p
              class="small text-left"
            >We'll start you out with our Agency plan free for 14 days. After that, you can upgrade or continue using the Moonlighter plan for free.</p>
          </section>

          <div class="button-wrapper">
            <Button @onClick="signupButtonPressed" :inFlight="loading">Get Started!</Button>
          </div>

          <Error
            v-if='hasErrors'
            message='There was a problem with your request. Please try again.'
            />
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Error from "@/components/Error.vue";
import Input from "@/components/Input.vue";

export default {
  name: "Signup",
  computed: {
    ...mapGetters([
      "hasErrors",
      "loading"
    ]),
  },
  components: {
    Button,
    Card,
    Error,
    Input,
  },
  data() {
    return {
      code: "",
      signUpRequest: {
        teamName: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        wantsEmail: false,
      },
    };
  },
  methods: {
    ...mapActions([
      'clearErrors',
      'setErrorState',
      'signupFromInvite',
      'signup',
    ]),
    inputIsInvalid(field, value) {
      // TODO
      return false;
    },
    signupButtonPressed() {
      this.clearErrors();
      
      let foundError = false;
      for (const field in this.signUpRequest) {
        const fieldIsValid = this.inputIsInvalid(field, this.signUpRequest[field])
        if (!fieldIsValid) foundError = true;
      }

      if (foundError) {
        this.setErrorState();

        return null;
      }

      const t = this.signUpRequest.teamName;
      const f = this.signUpRequest.firstName;
      const l = this.signUpRequest.lastName;
      const e = this.signUpRequest.emailAddress;
      const p = this.signUpRequest.password;

      if (this.code) {
        this.signupFromInvite({ t, f, l, e, p, c: this.code });
      } else {
        this.signup({ f, l, e, p, w: this.signUpRequest.wantsEmail })
      }
    },
  },
};
</script>
// <style lang="scss" scoped>
@import "~@/styles/layout.scss";
@import "~@/styles/mixins.scss";
@import "~@/styles/variables.scss";

.one {
  grid-template-columns: 50% !important;
  align-items: center;
  justify-content: center;

  @include respond-below(md) {
    grid-template-columns: 100% !important;
  }
}

.card-wrapper {
  width: 100%;
  margin-top: $margin-big;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.3;
  margin: 0;
  transition: $transition;

  &.black {
    color: $black;
  }
}

h1 {
  font-size: 1.45em;
  font-weight: 400;

  &.bold {
    font-weight: 700;
  }
}

p {
  font-size: 1em;
  margin: 0;
  margin-bottom: 1rem;
}

.header {
  margin-bottom: 1.5rem;
}

.button-wrapper {
  text-align: right;
}
</style>
