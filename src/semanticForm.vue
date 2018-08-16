<template lang="html">  
  Curent Tab: {{curTab}}
  <div is="sui-container">
    <sui-menu :widths="3">
      <sui-menu-item class="clickable">Editorials</sui-menu-item>
      <sui-menu-item class="clickable">Reviews</sui-menu-item>
      <sui-menu-item active class="clickable">Upcoming Events</sui-menu-item>
    </sui-menu>
  <sui-grid celled>
    <sui-grid-row>
      <sui-grid-column :width="3">
        <sui-segment>
            <h5>Information</h5>
          </sui-segment>
      </sui-grid-column>
      <sui-grid-column :width="13">
        <sui-form>
    <sui-form-field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </sui-form-field>
    <sui-form-field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </sui-form-field>
    <sui-form-field>
      <sui-checkbox label="I agree to the Terms and Conditions" />
    </sui-form-field>
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="3">
        <sui-segment>
            <h5>Image</h5>
          </sui-segment>
      </sui-grid-column>
      <sui-grid-column :width="10">
        <sui-image src="http://lorempixel.com/400/200/" size="small" />
      </sui-grid-column>
      <sui-grid-column :width="3">
        <div>
    <sui-button primary compact>Accept</sui-button>
    <sui-button secondary compact>Decline</sui-button>
  </div>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
  </div>
</template>

<script>
export default {
  name: "VerticallyDividedExample",
  props: {
    curTab: "This"
  }
};
</script>

<style>
  .clickable {
    cursor: pointer;
  }
</style>
