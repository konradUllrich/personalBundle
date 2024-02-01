import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface INV_KAT_UNTERKATEGORIEAttributes {
    STRID: string;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    LUSERID?: number;
    STR_UNTERKATEGORIE?: string;
    DTEDIT?: Date;
}

@Table({
	tableName: "INV_KAT_UNTERKATEGORIE",
	timestamps: false 
})
export class INV_KAT_UNTERKATEGORIE extends Model<INV_KAT_UNTERKATEGORIEAttributes, INV_KAT_UNTERKATEGORIEAttributes> implements INV_KAT_UNTERKATEGORIEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UNTERKATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}