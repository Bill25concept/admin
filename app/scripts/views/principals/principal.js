App.PrincipalView = Em.View.extend({
    editing: false,

    edit: function() {
        this.set('editing', true);
    },

    save: function(principal) {
        this.set('editing', false);
        this.set('principal', principal.save());
    }
});
