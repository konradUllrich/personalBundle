import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPTEMPLAttributes {
    STRGUID: string;
    STRNAME: string;
    DTCHANGED?: Date;
    STRDESC?: string;
    STRRTCLASS: string;
    BSHOW: number;
    STRDIRECTORY?: string;
    LORDER?: number;
}

@Table({
	tableName: "LCAPPTEMPL",
	timestamps: false 
})
export class LCAPPTEMPL extends Model<LCAPPTEMPLAttributes, LCAPPTEMPLAttributes> implements LCAPPTEMPLAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTCHANGED?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRDESC?: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRRTCLASS!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BSHOW!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRDIRECTORY?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LORDER?: number;

}