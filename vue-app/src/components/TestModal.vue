<template>
    <modal name="hello-world" style="background-color: blue; color:black">
    <div>
      <button @click="$modal.hide('hello-world')">
        ❌
      </button>
    </div>
    hello, world!
    </modal>
</template>

<script>
export default {
  name: 'HelloWorld',
  clickToClose: true
}
</script>
