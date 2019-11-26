



 <h2>Resturents</h2>
<Container>
                    <Row>
                      <Col xs={6} md={4}>
      <Image src={Byblos} thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Byblos} thumbnail />
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={4}>
      <Image src={Byblos} thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Byblos} thumbnail />
    </Col>
  </Row>

</Container>
              <h2>Food Trucks</h2>
              <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={Foodtruck} thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Foodtruck} thumbnail />
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={4}>
      <Image src={Foodtruck} thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src={Foodtruck} thumbnail />
    </Col>
  </Row>

</Container>



componentDidMount() {
  axios.get('http://localhost:5300/exercises/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        username: response.data.username,
        description: response.data.description,
        duration: response.data.duration,
        date: new Date(response.data.date)
      })   
    })
    .catch(function (error) {
      console.log(error);
    })

  axios.get('http://localhost:5300/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })

}
