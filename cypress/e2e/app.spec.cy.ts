describe('App works correctly with routes', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/');
  })

  it('should open main page', () => {
    cy.contains('Соберите бургер');
  })

  it('should open feed page after link click', function() {
    cy.get('a').contains('Лента заказов').click();
    cy.location('pathname').should('eq', '/feed');
    cy.get('[class^=feed_left_section__]').first().contains('Лента заказов');
  });

  it('should open login page after link click', function() {
    cy.get('a').contains('Личный кабинет').click();
    cy.location('pathname').should('eq', '/login');
    cy.get('[class^=login_wrapper__]').first().contains('Вход');
  });

  it('should open ingredient modal after ingredient click', function() {
    cy.get('[class^=item-burger_burger_item__]').first().click();
    cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');
    cy.get('[class^=modal_modal_header__]').first().contains('Детали ингредиента');
    cy.get('[class^=modal_modal_header__]').find('svg').first().click();
  });

  it('should open ingredient modal after reload page', function() {
    cy.get('[class^=item-burger_burger_item__]').first().click();
    cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');
    cy.get('[class^=modal_modal_header__]').first().contains('Детали ингредиента');
    cy.reload()
    cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');
    cy.get('[class^=modal_modal_header__]').first().contains('Детали ингредиента');
    cy.get('[class^=modal_modal_header__]').find('svg').first().click();
  });

  it('should open ingredient page after visit path /ingredients/60d3b41abdacab0026a733c6', function() {
    cy.visit('http://localhost:3000/ingredients/60d3b41abdacab0026a733c6');
    cy.contains('Детали ингредиента');
    cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');
  });

  it('should close ingredient modal after close click', function() {
    cy.visit('http://localhost:3000/');
    cy.get('[class^=item-burger_burger_item__]').first().click();
    cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');
    cy.get('[class^=modal_modal_header__]').first().contains('Детали ингредиента');
    cy.get('[class^=modal_modal_header__]').find('svg').first().click();
  });

  it('should close ingredient modal after overlay click', function() {
    cy.get('[class^=item-burger_burger_item__]').first().click();
    cy.location('pathname').should('eq', '/ingredients/60d3b41abdacab0026a733c6');
    cy.get('[class^=modal_modal_header__]').first().contains('Детали ингредиента');
    cy.get('[class^=modal-overlay_modal_overlay__]').click('bottomLeft', {force: true});
  });
})

describe('Create order', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", { fixture: "orders.json" }).as("createOrder");
    cy.intercept("POST", "https://norma.nomoreparties.space/api/auth/login", { fixture: "login.json" }).as("postLogin");
  })

  it('should open main page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Соберите бургер');
  })

  it('should drag and drop ingredients in constructor', () => {
    cy.get('[class^=burger-constructor_constructor_container__]').as('constructorContainer')
    cy.get('[class^=burger-constructor_constructor_list__]').as('constructor');

    cy.get('[id^=bun]').find('a[href^="/ingredients/"]').first().trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@constructorContainer').find('> div:first > div').should('have.length', 1);
    cy.get('@constructorContainer').find('> div:last > div').should('have.length', 1);

    cy.get('[id^=sauce]').find('a[href^="/ingredients/"]').first().trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@constructor').find('> div[class^=constructor-item_constructor_list__]').should('have.length', 1);

    cy.get('[id^=filling]').find('a[href^="/ingredients/"]').first().trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@constructor').find('> div[class^=constructor-item_constructor_list__]').should('have.length', 2); 
  })


  it('should open login page after click "Create Order"', () => {
    cy.get('button').contains('Оформить заказ').click();
    cy.location('pathname').should('eq', '/login');
  })

  it('should input login and password', () => {
    cy.get('input[type=email]').click().type('qnr18625@cdfaq.com');
    cy.get('input[type=password]').click().type('123123123');
    cy.get('button').contains('Войти').click();
    cy.wait("@postLogin").its("request.body").should("deep.equal", {
      email: "qnr18625@cdfaq.com",
      password: "123123123",
    });
    cy.location('pathname').should('eq', '/');
  })

  it('should create order after click "Create Order" ', () => {
    cy.get('button').contains('Оформить заказ').click();
    cy.wait("@createOrder").its("request.body").should("deep.equal", {
      "ingredients": ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733c8", "60d3b41abdacab0026a733cc"]
    });
  })
})