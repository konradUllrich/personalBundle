import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_BOARDGRUPPEAttributes {
    STR_MANDANT?: string;
    STR_BOARDGRUPPE?: string;
    LUSERID?: number;
    STRID: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "KB_T_BOARDGRUPPE",
	timestamps: false 
})
export class KB_T_BOARDGRUPPE extends Model<KB_T_BOARDGRUPPEAttributes, KB_T_BOARDGRUPPEAttributes> implements KB_T_BOARDGRUPPEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MANDANT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BOARDGRUPPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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

}