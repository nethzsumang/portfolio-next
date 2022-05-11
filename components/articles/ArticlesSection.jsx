import { t } from 'i18next';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

/**
 * ArticlesSection component
 * @author Kenneth Sumang
 */
export default function ArticlesSection () {
  const appTheme = useSelector(state => state.app.appTheme);
  const articleLinkMap = {
    1: 'https://kennethsumang.medium.com/hidden-gems-in-eloquent-orm-laravel-7-x-ed09e3a78c97',
    2: 'https://medium.com/nethzsumang/understanding-digital-image-processing-ca091cabea5e',
    3: 'https://medium.com/@kennethsumang/introducing-sapui5-helper-67bdf877a4b'
  };

  /**
   * Shows a new window when article card is clicked.
   * @param {number} order 
   * @return {void}
   */
  function handleArticleCardClick (order) {
    order = order + '';
    if (Object.keys(articleLinkMap).includes(order) === true) {
      const articleLink = articleLinkMap[order];
      window.open(articleLink);
      return;
    }

  }

  return (
    <div className="articles-section__container">
      <h3 className="articles-section__header">{ t('ARTICLES.HEADER') }</h3>
      <div className="articles__container">
        <Card
          className="articles__card"
          onClick={() => handleArticleCardClick(1)}
        >
          <Card.Img variant="top" src="https://miro.medium.com/max/1400/0*l4mKJPK2gq9n9e-q" />
          <Card.Body className={appTheme === 'dark' ? '__dark-div' : ''}>
            <Card.Title>Hidden Gems in Eloquent ORM — Laravel 7.x</Card.Title>
            <Card.Text>
              Many of us use Eloquent when programming with Laravel. But believe it or not, 
              there are many hidden gems in Eloquent that is waiting to be revealed...
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="articles__card"
          onClick={() => handleArticleCardClick(2)}
        >
          <Card.Img variant="top" src="https://miro.medium.com/max/1400/0*H8QHKGRNHPUINiu4" />
          <Card.Body className={appTheme === 'dark' ? '__dark-div' : ''}>
            <Card.Title>Understanding Digital Image Processing</Card.Title>
            <Card.Text>
            You suddenly want to know how your smartphone or computer represent images you took. 
            In this article, I will discuss what is an image and how image processing work...
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="articles__card"
          onClick={() => handleArticleCardClick(3)}
        >
          <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*lovxQO12mwBmO3mhK2QeIg.jpeg" />
          <Card.Body className={appTheme === 'dark' ? '__dark-div' : ''}>
            <Card.Title>Introducing SAPUI5 Helper</Card.Title>
            <Card.Text>
            In the middle of it, you thought, “Is there something I can use to create all these boilerplate codes easily?”
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}