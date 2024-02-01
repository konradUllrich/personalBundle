import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCCALRECUAttributes {
    LID: number;
    DTEDIT?: Date;
    LUSERID?: number;
    STRAPPGUID?: string;
    STRDGGUID?: string;
    DTFROM?: Date;
    DTUNTIL?: Date;
    LDURATION?: number;
    STRRULE?: string;
    DTEXTRACTEDFROM?: Date;
    DTEXTRACTEDUNTIL?: Date;
}

@Table({
	tableName: "LCCALRECU",
	timestamps: false 
})
export class LCCALRECU extends Model<LCCALRECUAttributes, LCCALRECUAttributes> implements LCCALRECUAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDGGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTFROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTUNTIL?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LDURATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRRULE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEXTRACTEDFROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEXTRACTEDUNTIL?: Date;

}