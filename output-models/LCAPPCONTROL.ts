import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPCONTROLAttributes {
    STRGUID: string;
    STRAPPFUPGUID: string;
    STRBINDING?: string;
    STRFORM: string;
    BEDITCONTROL: number;
    STRCONTROLTYPE?: string;
    STRCONTROLNAME?: string;
    LPOSITION?: number;
    STRSYSIDENT?: string;
    STRHIDDENSTATE?: string;
    STRLANGCONSTTITLE?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPCONTROL",
	timestamps: false 
})
export class LCAPPCONTROL extends Model<LCAPPCONTROLAttributes, LCAPPCONTROLAttributes> implements LCAPPCONTROLAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRBINDING?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRFORM!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BEDITCONTROL!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRCONTROLTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTROLNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LPOSITION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSYSIDENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRHIDDENSTATE?: string;

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