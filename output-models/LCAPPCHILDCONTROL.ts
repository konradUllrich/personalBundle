import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPCHILDCONTROLAttributes {
    STRGUID: string;
    STRAPPCONTROLDRGUID: string;
    STRAPPFIELDGUID?: string;
    LPOSITION: number;
    BDISTINCT?: number;
    STRCONTROLTYPE: string;
    STRCONTROLNAME: string;
    STRSYSIDENT?: string;
    BEDITCONTROL: number;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPCHILDCONTROL",
	timestamps: false 
})
export class LCAPPCHILDCONTROL extends Model<LCAPPCHILDCONTROLAttributes, LCAPPCHILDCONTROLAttributes> implements LCAPPCHILDCONTROLAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPCONTROLDRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFIELDGUID?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LPOSITION!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BDISTINCT?: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRCONTROLTYPE!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRCONTROLNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSYSIDENT?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BEDITCONTROL!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}