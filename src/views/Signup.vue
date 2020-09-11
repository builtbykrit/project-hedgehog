<template>
<div class="">
  <div class="navbar">
    <div class="container">
      <div class="left-nav">
        <div class="logo"></div>
      </div>
      <div class="right-nav">
        <ul class="nav-list">
          <router-link to="/" tag="li">Login</router-link>
        </ul>
      </div>
    </div>
  </div>
  <div class="container--main">
    <div class="row center-xs">
      <div class="col-xs-10 col-sm-5">
        <div class="row">
          <div class="header text-center">
            <h1 v-if="code">Welcome to Albatross!</h1>
            <h1 v-else>Sign up for Albatross</h1>
            <p class="light" v-if="code">Join your team and start making smarter project estimates</p>
            <p class="light" v-else>Start making smarter project estimates today!</p>
          </div>
          <template v-if="code">
            
          </template>
          <!-- {{#if code}}
            {{validated-text-input name='teamName'
                                type='text'
                                placeholder='Name your team...'
                                label='What is your team called?'
                                value=teamName
                                error=validations.attrs.teamName.message
                                showError=showError}}
            {{validated-text-input name='firstName'
                                type='text'
                                placeholder='First Name'
                                  label='What is your name?'
                                class='half-field-wrapper'
                                value=firstName
                                error=validations.attrs.firstName.message
                                showError=showError}}
            {{validated-text-input name='lastName'
                                type='text'
                                placeholder='Last Name'
                                class='half-field-wrapper'
                                value=lastName
                                error=validations.attrs.lastName.message
                                showError=showError}}

            {{validated-text-input name='emailAddress'
                                type='text'
                                placeholder='Enter your email...'
                                  label='What is your email address?'
                                value=emailAddress
                                error=validations.attrs.emailAddress.message
                                showError=showError}}

            {{validated-text-input name='password'
                                type='password'
                                placeholder='Create your password...'
                                  label='Create a nice, secure password'
                                value=password
                                error=validations.attrs.password.message
                                showError=showError}}
          {{else}}
          {{validated-text-input name='firstName'
                                type='text'
                                placeholder='First Name'
                                  label='What is your name?'
                                class='half-field-wrapper'
                                value=firstName
                                error=validations.attrs.firstName.message
                                showError=showError}}
          {{validated-text-input name='lastName'
                                type='text'
                                placeholder='Last Name'
                                class='half-field-wrapper'
                                value=lastName
                                error=validations.attrs.lastName.message
                                showError=showError}}

          {{validated-text-input name='emailAddress'
                                type='text'
                                placeholder='Enter your email...'
                                  label='What is your email address?'
                                value=emailAddress
                                error=validations.attrs.emailAddress.message
                                showError=showError}}

          {{validated-text-input name='password'
                                type='password'
                                placeholder='Create your password...'
                                  label='Create a nice, secure password'
                                value=password
                                error=validations.attrs.password.message
                                showError=showError}}
          {{/if}} -->
          <p class="small text-left">Passwords must be at least 8 characters and contain at least 1 special character</p>

          <!-- {{#unless code}}
            <section>
              <p class="small text-left">We'll start you out with our Agency plan free for 14 days. After that, you can upgrade or continue using the Moonlighter plan for free.</p>
            </section>
          {{/unless}} -->

          <!-- <section>
            {{#spin-button action=(action 'signupButtonPressed') class="btn-primary" buttonStyle="contract"}}Get Started!{{/spin-button}}
          </section> -->

          <!-- <section>
            <label class="checkbox">
              Receive emails about updates to Albatross and more
              {{input type="checkbox" name="wantsEmail" checked=wantsEmail}}
              <div class="indicator"></div>
            </label>
          </section> -->

          <!-- <section>
            {{error-message errors=errors}}
          </section> -->

        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'Signup',
  data() {
    return {
      code: 'ABC_123',
    }
  },
}
</script>
<style lang="scss" scoped>
// Variables
$white: #fff;
$black: #131349;
$light: #F4F9FC;
$base-font-color: $black;
$base-reference: 16px;
$base-line-height: 1.65;
$grey-dark: #515D79;
$grey-mid: #96A3B6;
$grey-light: #CDD7E4;
$transition: .3s ease-in-out;
$dark: #131349;
$padding: 1rem !default;
$padding-small: $padding / 1.5;
$padding-mid: $padding * 1.5;
$padding-big: $padding * 2;
$primary: #e14659;
$primary-dark: darken($primary, .2);
$navbar-content-height: 3rem;
$body: 'Helvetica', sans-serif !default;
$base-font-family: $body;
$body-bold: 700;
$red: #FA105D;
$red-dark: #A8144C;
$border-radius: 10px;
$base-font-size: $base-reference;
$margin: 1rem !default;


body {
  background: $light;
  color: $base-font-color;
  font-family: $base-font-family;
  font-size: $base-reference;
  font-style: normal;
  line-height: $base-line-height;
}

h1,h2,h3,h4,h5,h6 {
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

h2 {
  font-size: 1em;
  font-weight: 900;
}


p {
  color: $dark;
  font-size: 1em;
  margin: 0;

  &.small {
    color: $grey-mid;
    font-size: 0.8em;
    font-weight: 600;

    strong {
      color: $grey-dark;
    }
  }

  &.light {
    color: $grey-mid;
  }

  strong {
    font-weight: 900;
  }
}

a {
  color: $primary;
  cursor: pointer;
  font-weight: $body-bold;
  text-decoration: none;
  transition: $transition;
  font-weight: 700;

  &:hover {
    color: $primary-dark;
  }
}

label {
  color: $grey-mid;
  font-size: 0.8em;
  font-weight: 600;
}

.navbar {
	background: transparent;
	border: none;
	height: auto;
	left: 0;
	overflow: hidden;
	padding: 0.3em 0;
	top: 0;
	width: 100vw;
	z-index: 99;

	.logo {
		background-image: url('/img/logo/albatross-logo_beta.svg');
		background-repeat: no-repeat;
		background-size: contain;
		display: inline-block;
		height: 4rem;
		width: 12rem;
	    background-position: center left;
	    height: $navbar-content-height;
	    width: 9em;
    }

    .left-nav {
		ul, .logo {
		  float: left;
		}
    }

    .left-nav {
      display: inline-block;
      float: left;

      .user-name {
        display: none;
      }
    }

    .right-nav {
      display: inline-block;
      float: right;
    }

    ul {
      display: inline-block;
      height: $navbar-content-height;
      list-style-type: none;
      margin: 0;

      li {
        display: inline-block;
        line-height: $navbar-content-height;
        padding: 0 $padding-small;
        position: relative;

        a {
          color: $grey-mid;
          font-size: 0.8em;
          line-height: calc(#{$navbar-content-height} + 1em);
          padding: $padding-small;
          transition: $transition;
          user-select: none;

          &.active, &:hover {
            color: $dark;
          }
        }
      }
  }
}
.header {
  height: auto;
  overflow: visible;
  padding: $padding 0 $padding-big 0;
  position: relative;

  h1 {
    display: inline-block;
  }

  p {
    color: $grey-mid;
  }
}

input {
  border-radius: 6px;
  border: 1px solid $grey-light;
  height: auto;
  margin-bottom: 0.35rem;
  outline: none;
  padding: 0.6em;
  width: 100%;
  font-family: $body;
  font-size: 1em;
  transition: $transition;

  &:focus {
    border-color: $primary;
  }

  &.error {
    border-color: $red;
  }

  &::placeholder {
    color: $grey-mid;
  }

  &.toggle-input {
    background: transparent;
    border: none;
    border-bottom: 1px dotted transparent;
    border-radius: 0;
    color: $base-font-color;
    cursor: pointer;
    display: inline-block;
    height: 1.65em;
    padding: 0;
    margin: 0;
    transition: $transition;
    width: auto;

    &:focus, &:active {
      border-bottom: 1px dotted $primary;
      color: $black;
      cursor: text;
    }
  }
}

input:focus,
input:active, {

  ~ label {
    color: $primary;
    transition: $transition;
  }

  &.disabled {
    color: $grey-mid;

    ~ label {
      color: $grey-mid;
    }
  }
}

.field {
  margin: $padding 0 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;

  &--half {
    @extend .field;
    display: inline-block;
    margin-right: $padding;
    width: 46%;

    &:last-child {
      margin-right: 0;
    }
  }

  &.no-label {

    input {
      height: auto;
      padding: $padding;

      &:active,
      &:focus {
        height: auto;
        padding: $padding;
      }
    }
  }

  &.error {
    input {
      border-color: $red;
    }

    p {
      color: $red;
      margin: 0;
    }
  }
}

button {
  border-radius: $border-radius;
  border-width: 0;
  box-shadow: none;
  color: $white;
  cursor: pointer;
  font-family: $body;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  min-width: golden-ratio($base-font-size,  4);
  outline: none;
  padding: 0.75rem $padding-mid;
  position: relative;
  transition: $transition;

  &[disabled], &:disabled {
    background: $grey-light !important;
    color: $white !important;
    cursor: initial;
  }

  &.btn-primary {
    background: $primary;

    &:hover {
      background: $primary-dark;
    }

    &.import-harvest {
      padding: 0.75em 1.75em;
      img {
        max-height: 1rem;
        margin: 0 0 -3px 8px;
      }
    }
  }

  &.spin-button {
    border: none;
    border-radius: $border-radius;
    font-size: 1rem;
    padding: 0.75rem $padding-big;
    width: auto !important;

    span {
      font-size: 1em;
    }

    &.in-flight {
      border-radius: 4px !important;
      width: auto !important;
    }
  }
}

$checkbox-width: 22px;

.checkbox {
  position: relative;
  display: block;
  cursor: pointer;
  letter-spacing: 0;
  color: $grey-mid;
  text-transform: none;
  opacity: 1;
  text-align: left;
  padding: 1rem 0 0.1rem ($checkbox-width + 10px);
  transition: $transition;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: $transition;

    &:checked ~ .indicator {
      background: $white;
      border: 2px solid $primary;

      &:after {
        opacity: 1;
      }
    }
  }

  .indicator {
    position: absolute;
    left: 0;
    top: 1rem;
    width: $checkbox-width;
    height: $checkbox-width;
    margin-right: $margin;
    margin-top: 2px;
    border-radius: 2px;
    border: 2px solid $grey-mid;
    background: transparent;
    transition: $transition;

    &:after {
      position: absolute;
      display: block;
      opacity: 0;
      content: '';
      transition: $transition;
      top: 3px;
      left: 7px;
      width: 5px;
      height: 10px;
      transform: rotate(45deg);
      border: solid $primary;
      border-width: 0 2px 2px 0;
      opacity: 0;
      transition: $transition;
    }
  }

  &:hover {
    .indicator {
      border: 2px solid $primary;
    }
  }
}

.error-message {
  background: $red;
  border: 1px solid $red;
  border-radius: $border-radius;
  color: $red-dark;
  padding: $padding;

  p {
    color: $white;
  }
}
</style>
