import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BENV_T_U_ZUSATZDATENAttributes {
    L_FILEINFORMATION?: number;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    STR_MEINEINITIALEN?: string;
    STR_SCHRIFTFARBE?: string;
    FKLID?: number;
    STRID: string;
    LUSERID?: number;
    DTEDIT?: Date;
    STR_HINTERGRUNDFARBE?: string;
    STR_ANZEIGE?: string;
}

@Table({
	tableName: "BENV_T_U_ZUSATZDATEN",
	timestamps: false 
})
export class BENV_T_U_ZUSATZDATEN extends Model<BENV_T_U_ZUSATZDATENAttributes, BENV_T_U_ZUSATZDATENAttributes> implements BENV_T_U_ZUSATZDATENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

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
    	STR_MEINEINITIALEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANZEIGE?: string;

}