import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface INV_KAT_KATEGORIEAttributes {
    LUSERID?: number;
    DTINSERT?: Date;
    REF_BEREICH?: string;
    LUSERIDINSERT?: number;
    STR_KATEGORIE?: string;
    DTEDIT?: Date;
    STRID: string;
}

@Table({
	tableName: "INV_KAT_KATEGORIE",
	timestamps: false 
})
export class INV_KAT_KATEGORIE extends Model<INV_KAT_KATEGORIEAttributes, INV_KAT_KATEGORIEAttributes> implements INV_KAT_KATEGORIEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BEREICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KATEGORIE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}