const Footer = () => (
    <div style={{
        width: '100%', height: 150, background: '#000000',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
        <div style={{color: '#ffffff', fontFamily: 'Courier', fontWeight: 'bold', margin: 40}}>
            Can't find what are you looking for?
        </div>
        <div className='noselect' style={{
            width: 110, height: 40, marginTop: 20, background: '#ffffff', borderRadius: 5,
            fontSize: 14, display: 'flex', alignItems: 'center', fontWeight: 'bold',
            justifyContent: 'space-around', cursor: 'pointer', margin: 40
        }}>
            Contact us
        </div>
    </div>
)

export default Footer
