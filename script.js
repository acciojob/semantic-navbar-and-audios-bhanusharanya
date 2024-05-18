//your code here
describe('Audio Section Test', () => {
  it('checks the audio elements', () => {
    cy.visit('path_to_your_html_file'); // Adjust the path to your HTML file
    cy.contains('3 random audios');
    cy.get('audio').should('have.length', 3).each(($audio) => {
      cy.wrap($audio).should('have.attr', 'controls');
    });

    cy.get('audio').then($audios => {
      const srcs = $audios.map((i, el) => Cypress.$(el).find('source').attr('src')).get();
      expect(srcs).to.deep.eq([
        'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
        'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
      ]);
    });
  });
});